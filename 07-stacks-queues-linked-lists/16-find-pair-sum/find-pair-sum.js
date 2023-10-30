const DoublyLinkedList = require('./DoublyLinkedList');

function findPairSum(numbers, targetSum) {
  const list = new DoublyLinkedList();

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const target = targetSum - num;

    if (list.contains(target)) {
      return [target, num];
    }

    list.append(num);
  }

  return null;
}

module.exports = findPairSum;
