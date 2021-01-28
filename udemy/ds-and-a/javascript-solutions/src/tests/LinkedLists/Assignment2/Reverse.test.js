const LinkedList = require("../../../LinkedLists/LinkedList");

test('Reverse order of elements in linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(0);

    expect(linkedList.toString()).toBe('0, 1, 2');

    linkedList.reverse();

    expect(linkedList.toString()).toBe('2, 1, 0');
});