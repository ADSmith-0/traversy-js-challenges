const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
  const queue = new Queue();
  let outputStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    queue.enqueue(char);
  }

  while (!queue.isEmpty()) {
    outputStr += queue.dequeue();
  }

  return outputStr;
};

module.exports = reverseStringWithQueue;
