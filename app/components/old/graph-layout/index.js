import { forceSimulation, forceManyBody, forceLink, forceCenter } from 'd3-force';

const applyForceLayout = (nodes, edges, width, height) => {

  const simulation = forceSimulation(nodes)
    .force('charge', forceManyBody().strength(-400))
    .force('link', forceLink(edges).id(d => d.id).distance(100))
    .force('center', forceCenter(width / 2, height / 2))
    .stop();

  // Run the simulation to stable state
  for (let i = 0; i < 300; ++i) simulation.tick();

  return nodes.map(node => ({
    ...node,
    position: { x: node.x, y: node.y }
  }));
};

export { applyForceLayout }