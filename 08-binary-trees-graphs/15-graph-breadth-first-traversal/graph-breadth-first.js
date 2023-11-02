const Queue = require('./queue');

function breadthFirstTraversal(graph, startingVertex) {
  if (Object.keys(graph.adjacencyList).length === 0) {
    return [];
  }

  const queue = new Queue();
  const visitedVertices = new Set();
  const path = [];

  queue.enqueue(startingVertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();

    if (!visitedVertices.has(currentVertex)) {
      path.push(currentVertex);
    }

    for (const vertex of graph.adjacencyList[currentVertex]) {
      if (!visitedVertices.has(vertex)) {
        queue.enqueue(vertex);
      }
    }

    visitedVertices.add(currentVertex);
  }

  return path;
}

module.exports = breadthFirstTraversal;
