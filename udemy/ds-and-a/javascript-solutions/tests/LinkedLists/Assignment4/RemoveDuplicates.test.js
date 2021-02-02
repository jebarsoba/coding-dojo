const LinkedList = require("../../../src/LinkedLists/LinkedList");

test('Remove duplicates from unsorted list', () => {
    let linkedList = new LinkedList();
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(3);
    linkedList.insertAtHead(0);
    linkedList.insertAtHead(3);

    expect(linkedList.toString()).toBe('3, 0, 3, 1');

    linkedList.removeDuplicates();

    expect(linkedList.toString()).toBe('3, 0, 1');
});