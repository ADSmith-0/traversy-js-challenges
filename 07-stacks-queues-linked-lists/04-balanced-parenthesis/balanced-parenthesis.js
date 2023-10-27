const Stack = require('./stack');

function balancedParenthesis(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(") {
      stack.push(char);
    }

    if (char === ")") {
      const bracket = stack.pop();

      if (bracket === null) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

module.exports = balancedParenthesis;
