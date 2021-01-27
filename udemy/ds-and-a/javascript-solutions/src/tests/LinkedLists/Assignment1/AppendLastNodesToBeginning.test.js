const LinkedList = require("../../../LinkedLists/LinkedList");

test('Append last N nodes to beginning', () => {
    let linkedList = new LinkedList();
    linkedList.insertAtHead(4);
    linkedList.insertAtHead(3);
    linkedList.insertAtHead(2);
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(0);

    expect(linkedList.toString()).toBe('0, 1, 2, 3, 4');

    const n = 2;
    linkedList.appendLastNodesToBeginning(2);

    expect(linkedList.toString()).toBe('3, 4, 0, 1, 2');
});