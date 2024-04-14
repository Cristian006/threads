import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const EVENT_HEIGHT = 20;
const EVENT_LANE_PADDING = 10;
const EVENT_LANE_HEIGHT = EVENT_HEIGHT + (EVENT_LANE_PADDING * 2);
const margin = { top: 40, right: 30, bottom: 20, left: 20 };

// Additional styles for the tooltip
const tooltipStyle = {
  position: 'absolute',
  padding: '10px',
  background: 'rgba(0, 0, 0, 0.85)',
  borderRadius: '4px',
  color: 'white',
  display: 'none',
  zIndex: 10
};

// Use a Map for event organization, as before
const organizeEventsIntoLanes = (events) => {
  const lanes = new Map();

  events.forEach(event => {
    if (!lanes.has(event.source)) {
      lanes.set(event.source, { source: event.source, events: [], subLanes: [] });
    }
    let placed = false;
    const eventStart = new Date(event.approxStart).getTime();
    const eventEnd = new Date(event.approxEnd).getTime();

    for (let i = 0; i < lanes.get(event.source).subLanes.length && !placed; i++) {
      let overlap = false;
      for (let j = 0; j < lanes.get(event.source).subLanes[i].length && !overlap; j++) {
        const existingEventStart = new Date(lanes.get(event.source).subLanes[i][j].approxStart).getTime();
        const existingEventEnd = new Date(lanes.get(event.source).subLanes[i][j].approxEnd).getTime();
        if (eventStart < existingEventEnd && eventEnd > existingEventStart) {
          overlap = true;
        }
      }
      if (!overlap) {
        lanes.get(event.source).subLanes[i].push(event);
        placed = true;
      }
    }
    if (!placed) {
      lanes.get(event.source).subLanes.push([event]);
    }
  });

  return Array.from(lanes.values()).map(lane => ({
    ...lane,
    height: lane.subLanes.length * EVENT_LANE_HEIGHT // Assuming each sub-lane is 30px high
  }));
};

const Timeline = ({ events, entities, onCurrentTimeChanged }) => {
  const xAxisRef = useRef();
  const svgRef = useRef();
  const containerRef = useRef();
  const cursorTimeRef = useRef(new Date(events[0].approxStart)); // Initialize with the starting time of the first event
  const tooltipRef = useRef();

  const drawTimeline = (transform) => {
    const svg = d3.select(svgRef.current);
    const xAxisContainer = d3.select(xAxisRef.current);
    const svgContainer = d3.select(svg.node().parentNode);
    const tooltipDiv = d3.select(tooltipRef.current);
    const containerWidth = svgContainer.node().clientWidth;
    const containerHeight = svgContainer.node().clientHeight;

    const organizedLanes = organizeEventsIntoLanes(events);
    const initialWidth = svgContainer.node().clientWidth - margin.left - margin.right;
    const height = organizedLanes.reduce((acc, lane) => acc + lane.height, 0) + margin.top + margin.bottom;
    const width = initialWidth;
    svg.attr('height', height);

    // Clear SVG to redraw
    svg.selectAll("*").remove();
    xAxisContainer.selectAll('*').remove();

    const xScale = d3.scaleTime()
      .domain([d3.min(events, e => new Date(e.approxStart)), d3.max(events, e => new Date(e.approxEnd))])
      .range([0, width]);

    if (transform) {
      xScale.domain(transform.rescaleX(xScale).domain());
    }

    const cursorXPosition = xScale(cursorTimeRef.current) + margin.left;

    const xAxis = d3.axisTop(xScale).ticks(5);

    xAxisContainer.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(${margin.left},${20})`)
      .call(xAxis);

    const content = svg.append("g")
      .attr("clip-path", "url(#clip)");

    svg.append("defs").append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", width)
      .attr("height", height + margin.top)
      .attr("transform", `translate(${margin.left},0)`);

    let cumulativeHeight = margin.top;
    organizedLanes.forEach((lane, laneIndex) => {
      cumulativeHeight += lane.height; // Update cumulativeHeight for the current lane
      // Draw a horizontal line at the bottom of each lane
      svg.append('line')
        .style('stroke', 'grey') // Choose a color that fits the theme
        .style('stroke-dasharray', ('3, 3')) // Optional: make it dashed
        .style('opacity', 0.5) // Optional: adjust opacity for subtlety
        .attr('x1', margin.left)
        .attr('x2', width + margin.left)
        .attr('y1', cumulativeHeight)
        .attr('y2', cumulativeHeight);

      let currentY = margin.top + organizedLanes.slice(0, laneIndex).reduce((acc, prevLane) => acc + prevLane.height, 0);

      lane.subLanes.forEach((subLane, subLaneIndex) => {
        subLane.forEach(event => {
          const eventStartTime = new Date(event.approxStart);
          const startX = xScale(eventStartTime) + margin.left;
          const endX = xScale(new Date(event.approxEnd)) + margin.left;
          const eventWidth = Math.max(endX - startX, 1); // Ensure a minimum width for visibility


          content.append('rect')
            .attr('x', startX)
            .attr('y', currentY + subLaneIndex * EVENT_LANE_HEIGHT + EVENT_LANE_PADDING) // Adjust based on sub-lane index
            .attr('width', eventWidth)
            .attr('height', EVENT_HEIGHT)
            .attr('fill', eventStartTime > cursorTimeRef.current ? 'rgba(255, 255, 255, 0.5)' : 'white')
            .attr('rx', 2) // Rounded corners for aesthetics
            .attr('ry', 2)
            .on('mouseover', (e) => {
              tooltipDiv.style('display', 'block').html(`
                <strong>${event.title}</strong><br/>
                Date: ${event.date}<br/>
                <div>
                  ${event.parties.map(p => {
                const d = entities.find(entity => entity.id === p);
                if (d) {
                  return d.name;
                }
                return ''
              }).join(', ')}
                </div>
              `);
            })
            .on('mousemove', (e) => {
              // Highlight the rectangle by changing fill and adding a stroke
              d3.select(e.target)
                .attr('fill', '#ff474c') // Change fill color on hover
                .attr('stroke', '#ff474c') // Add white stroke on hover
                .attr('stroke-width', '3'); // Increase stroke width for visibility

              const [x, y] = d3.pointer(e, svg.node());
              const tooltipDivRect = tooltipDiv.node().getBoundingClientRect();
              const tooltipWidth = Math.max(200, tooltipDivRect.width);
              const tooltipHeight = tooltipDivRect.height;

              // Calculating horizontal offset to keep the tooltip within the client bounds
              const offsetLeft = x + tooltipWidth + 20 > containerWidth ? -tooltipWidth - 20 : 20;

              // Calculating vertical offset to keep the tooltip within the client bounds
              let offsetTop = y + tooltipHeight + 20 > containerHeight ? -tooltipHeight - 20 : 20;

              // Adjust the vertical position of the tooltip based on mouse position to avoid going out of bounds
              if (y + offsetTop + tooltipHeight > containerHeight) {
                offsetTop = containerHeight - y - tooltipHeight - margin.top;
              }

              if (y + offsetTop < 0) {
                offsetTop = -y + 20;
              }

              tooltipDiv
                .style('left', `${x + offsetLeft}px`)
                .style('top', `${y + offsetTop}px`);
            })
            .on('mouseout', (e) => {
              d3.select(e.target)
                .attr('fill', 'white') // Reset fill color
                .attr('stroke', 'none') // Remove stroke
                .attr('stroke-width', '0'); // Reset stroke width

              tooltipDiv.style('display', 'none');
            });
        });
      });

      // Drawing lane labels at the start of each lane
      svg.append('text')
        .attr('class', 'lane-label')
        .attr('x', 5)
        .attr('y', currentY - 10) // Center label vertically in the lane
        .attr('dy', '0.32em')
        .attr('text-anchor', 'start')
        .text(lane.source)
        .attr('font-weight', 'bold')
        .attr('opacity', 0.5);
    });

    // Adding the red line cursor at the start of the timeline
    const cursorLine = content.append('line')
      .attr('x1', cursorXPosition)
      .attr('x2', cursorXPosition)
      .attr('y1', 0)
      .attr('y2', height)
      .attr('stroke', 'red')
      .attr('stroke-width', 3)
      .attr('class', 'cursor-line')
      .attr('cursor', 'ew-resize');


    // Define drag behavior
    const dragged = (event) => {

      const x = d3.pointer(event)[0]; // Get the x position of the cursor relative to the SVG
      let timeAtPointer = xScale.invert(x - margin.left);

      // Constrain the timeAtPointer to the domain limits
      const domain = xScale.domain();
      if (timeAtPointer < domain[0]) timeAtPointer = domain[0];
      if (timeAtPointer > domain[1]) timeAtPointer = domain[1];


      cursorTimeRef.current = timeAtPointer;
      onCurrentTimeChanged(timeAtPointer);

      // Update the cursor line's position
      const newXPosition = xScale(timeAtPointer) + margin.left;
      d3.select('.cursor-line')
        .attr('x1', newXPosition)
        .attr('x2', newXPosition);
    };


    cursorLine.call(d3.drag().on('drag', dragged));

    // Adding a click event listener to the SVG for setting the cursor position
    svg.on('click', function (event) {
      // Calculate click position relative to the SVG
      const [x] = d3.pointer(event);
      // Convert the click position to time using the xScale
      const timeAtClick = xScale.invert(x - margin.left);

      // Update the cursorTimeRef with the clicked time
      cursorTimeRef.current = timeAtClick;
      onCurrentTimeChanged(timeAtClick)
      // Update the cursor line's position to where the user clicked
      const newXPosition = xScale(timeAtClick) + margin.left;
      d3.select('.cursor-line')
        .attr('x1', newXPosition)
        .attr('x2', newXPosition);
    });
  };

  // Initialize and clean up the ResizeObserver
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === containerRef.current) {
          drawTimeline();
        }
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [events]);


  useEffect(() => {
    drawTimeline();
  }, [events]);

  return (
    <div ref={containerRef} className="border-t border-black" style={{ overflowY: 'auto', width: '100%', maxHeight: '30rem', background: '#0D0D0D', position: 'relative' }}>
      <div ref={tooltipRef} style={tooltipStyle}></div>
      <svg ref={xAxisRef} className="border-b border-black top-0 sticky z-10" style={{ background: '#121212' }} width="100%" height="30px"></svg>
      <svg ref={svgRef} className="relative" width="100%"></svg>
    </div>
  );
};

export default Timeline;
