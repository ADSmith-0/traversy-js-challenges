const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
  const queue = new Queue();
  const stack = new Stack();

  const sanitisedStr = str.replace(/[\s|,]/g, "").toLowerCase();
  
  for (let i = 0; i < sanitisedStr.length; i++) {
    const char = sanitisedStr[i];
    queue.enqueue(char);
    stack.push(char);
  }

  while (!queue.isEmpty()) {
    if (queue.dequeue() !== stack.pop()) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindromeQueueStack;
