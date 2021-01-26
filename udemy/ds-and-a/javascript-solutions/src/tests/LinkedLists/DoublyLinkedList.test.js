const DoublyLinkedList = require("../../LinkedLists/DoublyLinkedList");

test('Inserting item at head', () => {
    let linkedList = new DoublyLinkedList();
    linkedList.insertAtHead(5);
    linkedList.insertAtHead(10);
    linkedList.insertAtHead(2);

    expect(linkedList.toString()).toBe('2, 10, 5');
});