const DoublyLinkedList = require('./doubly-linked-list');

const list = new DoublyLinkedList();

list.append("1");
list.append("2");
list.append("3");
list.prepend("Hello");
list.insertAt(2, "World");
list.printAll();
console.log(list.contains("1"));
console.log("\n");

list.remove(4);

list.printAll();
