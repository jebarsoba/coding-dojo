const LinkedList = require("../../../src/LinkedLists/LinkedList");

test('Delete node from somewhere in the middle of a singly linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insertAtHead('z');
    linkedList.insertAtHead('y');
    linkedList.insertAtHead('x');
    linkedList.insertAtHead('w');
    linkedList.insertAtHead('v');
    linkedList.insertAtHead('u');

    expect(linkedList.toString()).toBe('u, v, w, x, y, z');

    linkedList.deleteFromMiddle('v');

    expect(linkedList.toString()).toBe('u, w, x, y, z');
});