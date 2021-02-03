const StackUsingArrayAsUnderlyingDS = require('../../src/StackAndQueues/StackUsingArrayAsUnderlyingDS');

test('should push item into stack', () => {
    let stack = new StackUsingArrayAsUnderlyingDS();

    stack.push(5);
    stack.push(15);
    stack.push(30);

    expect(stack.toString()).toBe('5, 15, 30');
});

test('should pop item from stack', () => {
    let stack = new StackUsingArrayAsUnderlyingDS();

    stack.push(5);
    stack.push(15);
    stack.push(30);

    expect(stack.toString()).toBe('5, 15, 30');

    const item = stack.pop();

    expect(item).toBe(30);
    expect(stack.toString()).toBe('5, 15');
});

test('should peek item in stack', () => {
    let stack = new StackUsingArrayAsUnderlyingDS();

    stack.push(5);
    stack.push(15);
    stack.push(30);

    expect(stack.toString()).toBe('5, 15, 30');

    expect(stack.peek()).toBe(30);
});