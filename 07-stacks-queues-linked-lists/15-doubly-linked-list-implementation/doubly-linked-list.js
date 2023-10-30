function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.append = function (data) {
  const node = new Node(data);

  if (this.head === null) {
    this.head = node;
  } else {
    node.prev = this.tail;
    this.tail.next = node;
  }

  this.tail = node;

  this.length++;
}

DoublyLinkedList.prototype.contains = function (value) {
  let current = this.head;
  let i = 0;

  while (current !== null) {
    if (current.data === value) {
      return true;
    }
    current = current.next;
    i++;
  }

  return false;
}

DoublyLinkedList.prototype.printAll = function () {
  let current = this.head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

DoublyLinkedList.prototype.get = function (index) {
  let current = this.head;
  let i = 0;

  while (i < index) {
    current = current.next;
    i++;
  }

  return current;
}

DoublyLinkedList.prototype.prepend = function (data) {
  const node = new Node(data);

  node.next = this.head;

  if (this.length <= 2) {
    this.tail = this.head;
  }

  this.head = node;
  this.length++;
}

DoublyLinkedList.prototype.insertAt = function (index, data) {
  if (index === 0) {
    this.prepend(data);
  } else if (index === this.length) {
    this.append(data);
  } else {
    let current = this.head;
    let i = 0;
    const node = new Node(data);

    while (i < index - 1) {
      current = current.next;
      i++
    }

    node.next = current.next;
    node.prev = current;
    current.next = node;
  }

  this.length++;
}

DoublyLinkedList.prototype.remove = function (index) {
  if (index === 0) {
    this.head = this.head.next;
    this.head.prev = null;
  } else if (index === this.length) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;
  }

  this.length--;
}

module.exports = DoublyLinkedList;
