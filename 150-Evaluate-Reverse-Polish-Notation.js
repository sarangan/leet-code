/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operators = ['+', '-', '*', '/'];
  const stack = [];

  for (const token of tokens) {
    if (operators.includes(token)) {
      const v1 = stack.pop();
      const v2 = stack.pop();
      stack.push(parseInt(eval(`${v2} ${token} ${v1}`)))
    } else {
      stack.push(token)
    }
  }

  return stack[0];
};


const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(evalRPN(tokens));