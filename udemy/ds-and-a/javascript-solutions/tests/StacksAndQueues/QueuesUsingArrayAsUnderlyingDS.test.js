const QueueUsingArrayAsUnderlyingDS = require('../../src/StackAndQueues/QueuesUsingArrayAsUnderlyingDS');

test('should enqueue item', () => {
    let queue = new QueueUsingArrayAsUnderlyingDS();

    queue.enqueue(5);
    queue.enqueue(15);
    queue.enqueue(30);

    expect(queue.toString()).toBe('5, 15, 30');
});

test('should dequeue item', () => {
    let queue = new QueueUsingArrayAsUnderlyingDS();

    queue.enqueue(5);
    queue.enqueue(15);
    queue.enqueue(30);

    expect(queue.toString()).toBe('5, 15, 30');

    queue.dequeue();

    expect(queue.toString()).toBe('15, 30');
});