const Graph = require('./graph');
const breadthFirstTraversal = require('./graph-breadth-first');

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('C', 'D');

const result = breadthFirstTraversal(graph, 'A');

console.log(result);
