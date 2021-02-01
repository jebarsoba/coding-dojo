const LinkedList = require("../../../LinkedLists/LinkedList");

test('given a circular list, should return true', () => {
    let linkedList = new LinkedList();
    let tail = linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(0);

    tail.nextNode = linkedList.head;

    expect(linkedList.isCircular()).toBeTruthy();
});

test('given a list which is not circular, should return false', () => {
    let linkedList = new LinkedList();
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(0);

    expect(linkedList.isCircular()).toBeFalsy();
});