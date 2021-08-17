const MinStack = require("../src/155-min-stack");

test("should push an element onto the stack and then pop it", () => {
  let stack = new MinStack();
  stack.push(1);

  expect(stack.pop()).toBe(1);
});

test("should push an element onto the stack and then top it", () => {
  let stack = new MinStack();
  stack.push(1);

  expect(stack.top()).toBe(1);
});

test("given an empty stack, top should return undefined", () => {
  let stack = new MinStack();

  expect(stack.top()).toBeUndefined();
});

test("should push two elements onto the stack and then get the minimum", () => {
  let stack = new MinStack();
  stack.push(1);
  stack.push(-1);

  expect(stack.getMin()).toBe(-1);
});

test("Example 1 from Leetcode", () => {
  let minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  expect(minStack.getMin()).toBe(-3);

  minStack.pop();
  expect(minStack.top()).toBe(0);
  expect(minStack.getMin()).toBe(-2);
});

test("Test case 29 from Leetcode", () => {
  let minStack = new MinStack();
  minStack.push(0);
  minStack.push(1);
  minStack.push(0);
  expect(minStack.getMin()).toBe(0);

  minStack.pop();
  expect(minStack.getMin()).toBe(0);
});
