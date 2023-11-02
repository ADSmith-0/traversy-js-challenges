class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  printAdjacencyList() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
    }
  }

  removeEdge(vertex1, vertex2) {
    // console.log(vertex1, vertex2);
    const v1v2Index = this.adjacencyList[vertex1].indexOf(vertex2);
    if (v1v2Index > -1) {
      this.adjacencyList[vertex1].splice(v1v2Index, 1);
    }

    // console.log(this.adjacencyList);
    const v2v1Index = this.adjacencyList[vertex2].indexOf(vertex1);
    if (v2v1Index > -1) {
      this.adjacencyList[vertex2].splice(v2v1Index, 1);
    }
    // console.log(this.adjacencyList);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length > 0) {
      const currentVertex = this.adjacencyList[vertex][0];
      this.removeEdge(vertex, currentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

// Example Adjacency List
// {
//   'A': ['B', 'C'],
//   'B': ['A', 'D'],
//   'C': ['A', 'D'],
//   'D': ['B', 'C']
// };

module.exports = Graph;
