const { LinkedList } = require('./linked-list');

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.insertAt(2, 10);
list.insertAt(0, 20);
list.removeFrom(2);

list.printAll();
