function findMiddle(list) {
  let slowPtr = list.head;
  let fastPtr = list.head;

  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slowPtr;
}

module.exports = findMiddle;
