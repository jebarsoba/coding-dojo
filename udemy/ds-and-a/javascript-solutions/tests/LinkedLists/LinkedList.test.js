const LinkedList = require("../../src/LinkedLists/LinkedList");

test('Inserting item at head', () => {
    let linkedList = new LinkedList();
    linkedList.insertAtHead(5);
    linkedList.insertAtHead(10);
    linkedList.insertAtHead(2);

    expect(linkedList.toString()).toBe('2, 10, 5');
});

test('Length', () => {
    let linkedList = new LinkedList();
    linkedList.insertAtHead(5);
    linkedList.insertAtHead(10);
    linkedList.insertAtHead(2);

    expect(linkedList.length()).toBe(3);
});

test('Deleting head item', () => {
    let linkedList = new LinkedList();
    linkedList.insertAtHead(5);
    linkedList.insertAtHead(10);
    linkedList.insertAtHead(2);

    expect(linkedList.length()).toBe(3);

    linkedList.deleteFromHead();

    expect(linkedList.toString()).toBe('10, 5');
});

test('Searching for an item', () => {
    let linkedList = new LinkedList();
    linkedList.insertAtHead(5);
    linkedList.insertAtHead(10);
    linkedList.insertAtHead(2);

    const node = linkedList.find(5);

    expect(node.data).toBe(5);
});

test('Inserting item in sorted list', () => {
    let linkedList = new LinkedList();
    linkedList.insertAtHead(10);
    linkedList.insertAtHead(5);
    linkedList.insertAtHead(2);

    linkedList.insertInSorted(7);

    expect(linkedList.toString()).toBe('2, 5, 7, 10');
});