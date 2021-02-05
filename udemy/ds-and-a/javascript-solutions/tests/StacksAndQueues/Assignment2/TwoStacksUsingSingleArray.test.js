const TwoStacksUsingSingleArray = require('../../../src/StackAndQueues/Assignment2/TwoStacksUsingSingleArray');

test('should push item into stack 1', () => {
    const maxSize1 = 2;
    const maxSize2 = 2;

    const twoStacks = new TwoStacksUsingSingleArray(maxSize1, maxSize2);
    twoStacks.push1(5);

    expect(twoStacks.peek1()).toBe(5);
});

test('should push item into stack 2', () => {
    const maxSize1 = 2;
    const maxSize2 = 2;

    const twoStacks = new TwoStacksUsingSingleArray(maxSize1, maxSize2);
    twoStacks.push2(4);

    expect(twoStacks.peek2()).toBe(4);
});

test('given more items than allowed are pushed into stack 1, should throw an exception', () => {
    const maxSize1 = 2;
    const maxSize2 = 2;

    const twoStacks = new TwoStacksUsingSingleArray(maxSize1, maxSize2);
    twoStacks.push1(5);
    twoStacks.push1(10);

    expect(() => twoStacks.push1(10)).toThrow("Stack is full");
});

test('given more items than allowed are pushed into stack 2, should throw an exception', () => {
    const maxSize1 = 2;
    const maxSize2 = 2;

    const twoStacks = new TwoStacksUsingSingleArray(maxSize1, maxSize2);
    twoStacks.push2(4);
    twoStacks.push2(8);

    expect(() => twoStacks.push2(12)).toThrow("Stack is full");
});