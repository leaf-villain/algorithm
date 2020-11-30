/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = new Stack();
  const HANDLER_MAP = {
    '(': () => stack.push('('),
    '{': () => stack.push('{'),
    '[': () => stack.push('['),
    ')': () => stack.last === '(' ? stack.pop() : stack.push(')'),
    '}': () => stack.last === '{' ? stack.pop() : stack.push('}'),
    ']': () => stack.last === '[' ? stack.pop() : stack.push(']'),
  };
  for (let index = 0; index < s.length; index++) {
    HANDLER_MAP[s[index]]();
  }

  return stack.isEmpty;
};

class Stack {
  constructor() {
    this.top = 0;
    this.stack = [];
  }

  get first() {
    return this.stack[0];
  }

  get last() {
    return this.stack[this.top - 1];
  }

  get isEmpty() {
    return this.top === 0;
  }

  push(content) {
    this.stack.push(content);
    this.top++;
  }

  pop() {
    this.stack.pop();
    this.top--;
  }
}
