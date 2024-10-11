"use client";

import React, { useState, useEffect } from 'react';
// import ReactFlow, { addEdge, MiniMap, Controls, Background, useNodesState, useEdgesState } from 'react-flow-renderer';
import ReactFlow, { addEdge, MiniMap, Controls, Background, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';

function TemporalForceDirectedGraph({ events, entities, currentDate, setSelectedLinkEvents, containerWidth, containerHeight }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Helper function to create node style based on the role
  const getNodeStyle = (entity) => ({
    background: entity.attributes.role === 'Intelligence agency' ? '#ff6347' : '#90ee90',
    borderColor: entity.attributes.role === 'Intelligence agency' ? '#dc143c' : '#008000',
    width: 150,
    height: 50,
    borderWidth: 2,
    color: '#333',
    fontSize: 14,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  useEffect(() => {
    const entityMap = new Map();
    const newEdges = [];

    entities.forEach(entity => {
      entityMap.set(entity.id, {
        id: entity.id.toString(),
        type: 'default', // You can use a custom node type here if needed
        data: { label: `${entity.name} (${entity.attributes.role})` },
        style: getNodeStyle(entity),
        position: { x: Math.random() * containerWidth, y: Math.random() * containerHeight } // Random positioning, consider a layout algorithm
      });
    });

    events.forEach(event => {
      if (new Date(event.date) <= new Date(currentDate)) {
        event.parties.forEach((partyId, index, parties) => {
          if (entityMap.has(partyId) && index < parties.length - 1) {
            const edgeId = `e${partyId}-${parties[index + 1]}`;
            if (!newEdges.some(edge => edge.id === edgeId)) { // Check for existing edge
              newEdges.push({
                id: edgeId,
                source: partyId.toString(),
                target: parties[index + 1].toString(),
                animated: true,
                style: { stroke: '#ddd' },
                label: event.name
              });
            }
          }
        });
      }
    });

    setNodes(Array.from(entityMap.values()));
    setEdges(newEdges);
  }, [currentDate, events, entities, containerWidth, containerHeight]);

  // Handle node and edge click events
  const onElementClick = (event, element) => {
    console.log('Clicked:', element);
  };

  return (
    <div style={{ width: containerWidth, height: containerHeight }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onElementClick={onElementClick}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default TemporalForceDirectedGraph;
/*
function TemporalForceDirectedGraph({ events, entities, currentDate, setSelectedLinkEvents, containerWidth, containerHeight }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Helper function to create node style
  const getNodeStyle = (entity) => ({
    // background: entity.color || '#fff',
    // width: 40,
    // height: 40,
    // backgroundImage: `url(${entity.image})`,
    // backgroundSize: 'cover',
    // borderColor: entity.color || '#000',
  });

  // Process data to fit React Flow
  useEffect(() => {
    let newNodes = [];
    let newEdges = [];
    const entityMap = new Map();

    console.log("REDRAW", entities);

    entities.forEach(entity => {
      entityMap.set(entity.id, {
        ...entity,
        data: { label: entity.name.split(" ").map(n => n[0]).join("") },
        style: getNodeStyle(entity),
      });
    });

    events.filter(event => new Date(event.date) <= new Date(currentDate))
      .forEach(event => {
        event.parties.forEach(entityId => {
          if (entityMap.has(entityId)) {
            newNodes.push({
              id: entityId,
              type: 'default', // or use a custom node type
              position: { x: 100, y: 100 }, // Random or use a layouting algorithm
              ...entityMap.get(entityId),
            });
          }
        });

        if (event.parties.length > 1) {
          for (let i = 0; i < event.parties.length; i++) {
            for (let j = i + 1; j < event.parties.length; j++) {
              newEdges.push({
                id: `e${event.parties[i]}-${event.parties[j]}`,
                source: event.parties[i],
                target: event.parties[j],
                animated: true,
                style: { stroke: '#ff474c' },
              });
            }
          }
        }
      });

    console.log(newNodes, newEdges)


    setNodes(newNodes);
    setEdges(newEdges);
  }, [currentDate, events, entities, containerHeight, containerWidth, setEdges, setNodes]);




  // Handle node and edge click events
  const onElementClick = (event, element) => {
    if (element.id.startsWith('e')) {
      const [source, target] = element.id.substring(1).split('-');
      const relatedEvents = events.filter(e =>
        e.parties.includes(source) && e.parties.includes(target));
      setSelectedLinkEvents(relatedEvents);
    }
  };

  return (
    <div style={{ width: containerWidth, height: containerHeight }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onElementClick={onElementClick}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default TemporalForceDirectedGraph;
*/