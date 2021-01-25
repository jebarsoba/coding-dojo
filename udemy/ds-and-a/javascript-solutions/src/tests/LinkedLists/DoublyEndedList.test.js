const DoublyEndedList = require("../../LinkedLists/DoublyEndedList");

test('Inserting item at tail', () => {
    let doublyEndedList = new DoublyEndedList();
    doublyEndedList.insertAtTail(2);
    doublyEndedList.insertAtTail(10);
    doublyEndedList.insertAtTail(5);

    expect(doublyEndedList.toString()).toBe('2, 10, 5');
});