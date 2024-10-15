import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { Button } from '../ui/button';
import { Plus, Minus, Fullscreen } from 'lucide-react';
import Minimap from './minimap'; 

// Define new constants for zoom limits
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 4;

function TemporalGraph({ events, selectedRange }) {
  const svgRef = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [transform, setTransform] = useState(d3.zoomIdentity);
  const zoomBehavior = useRef(null);

  // Update this function to filter events based on selectedRange, matching the timeline component logic
  const filterEventsByRange = useCallback((events, range) => {
    if (!range || !range.start || !range.end) return events;
    return events.filter(event => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);
      return (
        (eventStart >= range.start && eventStart <= range.end) || // Event starts within range
        (eventEnd >= range.start && eventEnd <= range.end) ||     // Event ends within range
        (eventStart <= range.start && eventEnd >= range.end)      // Event spans entire range
      );
    });
  }, []);

  // Memoize filtered events
  const filteredEvents = useMemo(() => filterEventsByRange(events, selectedRange), [events, selectedRange, filterEventsByRange]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const { width, height } = dimensions;

    // Create background pattern
    const defs = svg.append("defs");
    const pattern = defs.append("pattern")
      .attr("id", "grid-pattern")
      .attr("width", 20)
      .attr("height", 20)
      .attr("patternUnits", "userSpaceOnUse");

    pattern.append("circle")
      .attr("cx", 2)
      .attr("cy", 2)
      .attr("r", 1)
      .attr("fill", "#e0e0e0")
      .attr("opacity", 0.5);

    // Create container for all elements including background
    const container = svg.append("g");

    // Add background rect inside the container
    container.append("rect")
      .attr("width", width * 4)
      .attr("height", height * 4)
      .attr("x", -width * 1.5)
      .attr("y", -height * 1.5)
      .attr("fill", "url(#grid-pattern)");

    // Update zoom behavior
    zoomBehavior.current = d3.zoom()
      .scaleExtent([MIN_ZOOM, MAX_ZOOM])
      .translateExtent([[-width * 1.5, -height * 1.5], [width * 2.5, height * 2.5]])
      .on("zoom", (event) => {
        const newTransform = event.transform;
        container.attr("transform", newTransform);
        setTransform(newTransform);
      });

    svg.call(zoomBehavior.current);

  }, [dimensions]);

  useEffect(() => {
    if (!filteredEvents || filteredEvents.length === 0 || dimensions.width === 0 || dimensions.height === 0) return;

    const svg = d3.select(svgRef.current);
    const container = svg.select("g"); // Select the existing container

    // Remove previous nodes and links
    container.selectAll(".node, .link").remove();

    const { width, height } = dimensions;

    // Create links between nodes that share entities
    const links = [];
    if (filteredEvents.length > 1) {
      filteredEvents.forEach((source, i) => {
        filteredEvents.slice(i + 1).forEach(target => {
          const sharedEntities = source.entities.filter(entity => 
            target.entities.includes(entity)
          );
          if (sharedEntities.length > 0) {
            links.push({ source, target, value: sharedEntities.length });
          }
        });
      });
    }

    // Calculate the number of links for each node
    const linkCounts = {};
    links.forEach(link => {
      linkCounts[link.source.id] = (linkCounts[link.source.id] || 0) + 1;
      linkCounts[link.target.id] = (linkCounts[link.target.id] || 0) + 1;
    });

    // Define a scale for node sizes
    const nodeSizeScale = d3.scaleLinear()
      .domain([0, d3.max(Object.values(linkCounts)) || 1])
      .range([5, 20]);

    // Create force simulation with adjusted parameters
    const simulation = d3.forceSimulation(filteredEvents)
      .force("link", d3.forceLink(links).id(d => d.id).distance(300).strength(0.1))
      .force("center", d3.forceCenter(width / 2, height / 2).strength(0.05))
      .force("collide", d3.forceCollide().radius(d => nodeSizeScale(linkCounts[d.id] || 0) + 5))
      .alphaDecay(0.1) // Faster decay to reduce spinning
      .velocityDecay(0.3); // Add some damping to reduce oscillations

    // Create links
    const link = container.append("g")
      .selectAll(".link")
      .data(links)
      .join("line")
      .attr("class", "link")
      .attr("stroke-width", d => Math.sqrt(d.value))
      .attr("stroke", "rgba(200, 200, 200, 0.5)"); // Lighter, semi-transparent links

    // Create nodes
    const node = container.append("g")
      .selectAll(".node")
      .data(filteredEvents)
      .join("circle")
      .attr("class", "node")
      .attr("r", d => nodeSizeScale(linkCounts[d.id] || 0))
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("stroke-width", 1);

    // Add titles for tooltips
    node.append("title")
      .text(d => d.name);

    // Update positions on each tick of the simulation
    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });

    // If there's only one event, manually set its position
    if (filteredEvents.length === 1) {
      node
        .attr("cx", width / 2)
        .attr("cy", height / 2);
    }

    // Add drag behavior
    node.call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // Stop the simulation after a short time to prevent continuous updates
    setTimeout(() => simulation.stop(), 1000);

  }, [filteredEvents, dimensions]);

  const handleZoom = useCallback((direction) => {
    const svg = d3.select(svgRef.current);
    const duration = 250;
    const scale = direction === 'in' ? 1.2 : 0.8;

    svg.transition()
      .duration(duration)
      .call(zoomBehavior.current.scaleBy, scale)
      .on("end", () => {
        // Ensure the zoom doesn't exceed the limits
        const currentTransform = d3.zoomTransform(svg.node());
        if (currentTransform.k < MIN_ZOOM) {
          svg.call(zoomBehavior.current.transform, d3.zoomIdentity.scale(MIN_ZOOM));
        } else if (currentTransform.k > MAX_ZOOM) {
          svg.call(zoomBehavior.current.transform, d3.zoomIdentity.scale(MAX_ZOOM));
        }
      });
  }, []);

  const handleReset = useCallback(() => {
    const svg = d3.select(svgRef.current);
    const duration = 750;

    svg.transition()
      .duration(duration)
      .call(
        zoomBehavior.current.transform,
        d3.zoomIdentity.scale(1)
      );
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <svg ref={svgRef} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
      </svg>
      <Minimap
        width={dimensions.width}
        height={dimensions.height}
        transform={transform}
        minZoom={MIN_ZOOM}
      />
      <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
        <Button onClick={() => handleZoom('in')} variant="secondary" size="icon" style={{ marginRight: '5px' }}>
          <Plus size={16} />
        </Button>
        <Button onClick={() => handleZoom('out')} variant="secondary" size="icon" style={{ marginRight: '5px' }}>
          <Minus size={16} />
        </Button>
        <Button onClick={handleReset} variant="secondary" size="icon">
          <Fullscreen size={16} />
        </Button>
      </div>
    </div>
  );
}

export default TemporalGraph;
