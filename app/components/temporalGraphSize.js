import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { artists } from '@/data/jayz';

const artistImages = new Map(artists.map(artist => [artist.id, artist.img]));
const artistColors = new Map(artists.map(artist => [artist.id, artist.color ? artist.color : '#fff']));
const artistInitials = new Map(artists.map(artist => [artist.id, artist.artist.split(" ").map(name => name[0]).join("")]))
const artistMap = new Map(artists.map(artist => [artist.id, artist]))

const NODE_SIZE = 10;
const NODE_SIZE_MULTIPLIER = 2
const LINK_SIZE_MULTIPLIER = 2

function TemporalForceDirectedGraph({ events, currentDate, setSelectedLinkEvents }) {
  const svgRef = useRef();
  const [nodes, setNodes] = useState(new Map());
  const [links, setLinks] = useState([]);

  const width = 800;
  const height = 600;

  useEffect(() => {
    const newNodes = new Map();
    const newLinks = [];
    const linkCount = new Map();

    events.filter(event => new Date(event.date) <= new Date(currentDate))
      .forEach(event => {
        event.artists.forEach(artist => {
          newNodes.set(artist, (newNodes.get(artist) || 0) + 1); // Increase node size for each occurrence
        });

        if (event.artists.length > 1) {
          for (let i = 0; i < event.artists.length; i++) {
            for (let j = i + 1; j < event.artists.length; j++) {
              const key = `${event.artists[i]}-${event.artists[j]}`;
              if (!linkCount.has(key)) {
                linkCount.set(key, 1);
              } else {
                linkCount.set(key, linkCount.get(key) + 1);
              }
              newLinks.push({
                source: event.artists[i],
                target: event.artists[j],
                count: linkCount.get(key)
              });
            }
          }
        }
      });

    // Transform node map to array with additional attributes
    const nodesArray = Array.from(newNodes).map(([id, value]) => {

      return {
        ...artistMap.get(id),
        id,
        radius: NODE_SIZE_MULTIPLIER * NODE_SIZE + value - 1,
        img: artistImages.get(id),
        color: artistColors.get(id),
        initials: artistInitials.get(id),
      }
    });

    setNodes(nodesArray);
    setLinks(newLinks);
  }, [currentDate, events]);

  useEffect(() => {
    if (!nodes.length || !links.length) return; // Guard clause to avoid errors
    const svg = d3.select(svgRef.current).attr('viewBox', [-width / 2, -height / 2, width, height]);

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(200))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(0, 0));

    const link = svg.selectAll(".link")
      .data(links, d => `${d.source.id}-${d.target.id}`)
      .join("line")
      .classed("link", true)
      .style("stroke", "#ff474c")
      .style("stroke-width", d => d.count * LINK_SIZE_MULTIPLIER); // Use link count to adjust thickness


    svg.selectAll("defs").data([0]).join("defs") // Ensure a single <defs> element exists
      .selectAll("pattern")
      .data(nodes, d => d.id)
      .join("pattern")
      .attr("id", d => `pattern-${d.id}`) // Unique ID for referencing in fill
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", 1)
      .attr("height", 1)
      .append("image")
      .attr("xlink:href", d => d.img)
      .attr("width", d => 2 * d.radius)
      .attr("height", d => 2 * d.radius)
      .attr("preserveAspectRatio", "xMidYMid slice");

    //  const node = svg.selectAll(".node")
    //    .data(nodes, d => d.id)
    //    .join("circle")
    //    .classed("node", true)
    //    .attr("r", d => d.radius) // Use node radius
    //    .attr("fill", d => `url(#pattern-${d.id})`) // Fill with pattern
    //    .attr("stroke", d => d.color)
    //    .attr("stroke-width", 1)
    //    .call(drag(simulation));
    const node = svg.selectAll(".node")
      .data(nodes, d => d.id)
      .join("circle")
      .classed("node", true)
      .attr("r", d => d.radius) // Use node radius
      .attr("fill", d => `url(#pattern-${d.id})`) // Fill with pattern
      .attr("stroke", d => d.color)
      .attr("stroke-width", 1)
      .on("mouseover", function (event, d) {
        d3.select(this).attr("stroke", "#ff474c").attr("stroke-width", 3); // Change outline to red and make it thicker on hover
        // Optionally, you can show additional tooltip info here
      })
      .on("mouseout", function (event, d) {
        d3.select(this).attr("stroke", d.color).attr("stroke-width", 1); // Revert stroke changes
      })
      .call(drag(simulation));


    // Append a title element to each node for the tooltip
    node.append("title")
      .text((d) => {
        console.log("TITLE", d)
        if (d.artist !== d.name) {
          return `${d.artist}\n${d.name}`
        }
        return `${d.name}`
      });


    simulation.nodes(nodes).on("tick", () => {
      link.attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node.attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });

    simulation.force("link").links(links);



    function drag(simulation) {
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

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    return () => simulation.stop();
  }, [nodes, links]); // Depend on nodes and links state

  useEffect(() => {
    // Assuming nodes and links setup is here
    // Add an onClick handler to each link
    const svg = d3.select(svgRef.current);
    svg.selectAll('.link')
      .on('click', (_, d) => {
        console.log("LINK SELECTED", d);
        const relatedEvents = events.filter(event =>
          event.artists.includes(d.source.id) && event.artists.includes(d.target.id));
        setSelectedLinkEvents(relatedEvents);
      });

    // Ensure onClick is applied after links are drawn/updated
  }, [events, links, setSelectedLinkEvents]); // Re-apply onClick handlers when links change

  return (
    <div className="relative">
      <svg ref={svgRef} width={width} height={height}></svg>
    </div>
  )
}

export default TemporalForceDirectedGraph;