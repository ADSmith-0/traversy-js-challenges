const Stack = require('./stack');

function reverseStringStack(str) {
  const stack = new Stack();
  let outputStr = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    stack.push(char);
  }

  while (!stack.isEmpty()) {
    outputStr += stack.pop();
  }

  return outputStr;
}

module.exports = reverseStringStack;
