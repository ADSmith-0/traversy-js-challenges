const Stack = require('./stack');

function depthFirstTraversal(graph, startingVertex) {
  if (Object.keys(graph.adjacencyList).length === 0) {
    return [];
  }

  const stack = new Stack();
  const visitedVertices = new Set();
  const path = [];

  stack.push(startingVertex);

  while (!stack.isEmpty()) {
    const currentVertex = stack.pop();

    if (!visitedVertices.has(currentVertex)) {
      path.push(currentVertex);
    }

    for (const vertex of graph.adjacencyList[currentVertex]) {
      if (!visitedVertices.has(vertex)) {
        stack.push(vertex);
      }
    }

    visitedVertices.add(currentVertex);
  }

  return path;
}

module.exports = depthFirstTraversal;
