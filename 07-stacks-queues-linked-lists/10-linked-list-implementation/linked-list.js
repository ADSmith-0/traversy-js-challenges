class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    } 

    this.tail = node;
  }

  get(index) {
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    return current.data;
  }

  insertAt(index, value) {
    let current = this.head;
    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let i = 0;
      while (i < index - 1) {
        current = current.next;
        i++;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  removeFrom(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let i = 0;

      while (i < index - 1) {
        current = current.next;
        i++;
      }

      current.next = current.next.next;
    }
  }

  printAll() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

module.exports = { Node, LinkedList };
