const Stack = require('../Stack');

test('Pushing/popping items from the stack', () => {
  var stack = new Stack();
  stack.Push(1);
  stack.Push(2);

  expect(stack.Pop()).toBe(2);
  expect(stack.Pop()).toBe(1);
});

test('Peeking the top item in the stack', () => {
  var stack = new Stack();
  stack.Push(1);
  stack.Push(2);

  expect(stack.Peek()).toBe(2);
});
