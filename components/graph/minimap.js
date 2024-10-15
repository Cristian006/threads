import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Minimap = ({ width, height, transform, minZoom }) => {
  const minimapRef = useRef();

  useEffect(() => {
    if (!width || !height) return;

    const minimapSize = Math.min(width, height) * 0.2;
    const minimap = d3.select(minimapRef.current)
      .attr('width', minimapSize)
      .attr('height', minimapSize)
      .style('position', 'absolute')
      .style('bottom', '10px')
      .style('right', '10px')
      .style('border', '1px solid #ccc')
      .style('background-color', 'rgba(255, 255, 255, 0.4)');

    minimap.selectAll("*").remove();

    // Calculate the total viewable area at minimum zoom
    const totalWidth = width / minZoom;
    const totalHeight = height / minZoom;

    const xScale = d3.scaleLinear()
      .domain([-totalWidth / 2, totalWidth / 2])
      .range([0, minimapSize]);

    const yScale = d3.scaleLinear()
      .domain([-totalHeight / 2, totalHeight / 2])
      .range([0, minimapSize]);

    // Draw total viewable area rectangle
    minimap.append('rect')
      .attr('class', 'minimap-total-area')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', minimapSize)
      .attr('height', minimapSize)
      .attr('fill', 'none')
      .attr('stroke', '#999')
      .attr('stroke-width', 1);

    // Draw viewport rectangle
    const viewportWidth = width / transform.k;
    const viewportHeight = height / transform.k;
    const viewportX = -transform.x / transform.k;
    const viewportY = -transform.y / transform.k;

    const viewport = minimap.append('rect')
      .attr('class', 'minimap-viewport')
      .attr('x', xScale(viewportX))
      .attr('y', yScale(viewportY))
      .attr('width', xScale(viewportWidth / 2) - xScale(-viewportWidth / 2))
      .attr('height', yScale(viewportHeight / 2) - yScale(-viewportHeight / 2))
      .attr('fill', 'rgba(255, 0, 0, 0.2)')
      .attr('stroke', 'red')
      .attr('stroke-width', 1);

    // Add drag behavior to viewport
    const drag = d3.drag()
      .on('drag', (event) => {
        const dx = xScale.invert(event.dx) - xScale.invert(0);
        const dy = yScale.invert(event.dy) - yScale.invert(0);
        const newTransform = d3.zoomIdentity
          .translate(transform.x - dx * transform.k, transform.y - dy * transform.k)
          .scale(transform.k);
        
        d3.select('svg').call(d3.zoom().transform, newTransform);
      });

    viewport.call(drag);

  }, [width, height, transform, minZoom]);

  return <svg ref={minimapRef}></svg>;
};

export default Minimap;
