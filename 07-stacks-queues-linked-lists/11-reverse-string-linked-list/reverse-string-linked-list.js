const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
  let outputStr = "";
  const linkedList = new LinkedList();

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    linkedList.add(char);
  }

  let current = linkedList.head;
  while (current !== null) {
    outputStr += current.data;
    current = current.next;
  }

  return outputStr;
}

module.exports = reverseStringLinkedList;
