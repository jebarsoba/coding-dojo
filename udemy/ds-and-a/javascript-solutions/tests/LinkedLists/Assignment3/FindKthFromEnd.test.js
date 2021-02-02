const LinkedList = require("../../../src/LinkedLists/LinkedList");

test('Find kth element (counted from the end) of singly linked list in one pass', () => {
    let linkedList = new LinkedList();
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(0);

    expect(linkedList.toString()).toBe('0, 1, 2');

    const k = 1
    const kth = linkedList.findKthFromEnd(k);

    expect(kth.data).toBe(2);
});