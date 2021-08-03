const {
  ListNode,
  hasCycle,
} = require("../src/141-linked-list-cycle_two-pointers");

test("Given the head of a linked list, should determine if the linked list has a cycle in it (Example 1)", () => {
  let node0 = {};
  ListNode.call(node0, 3);

  let node1 = {};
  ListNode.call(node1, 2);

  let node2 = {};
  ListNode.call(node2, 0);

  let node3 = {};
  ListNode.call(node3, -4);

  node0.next = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = node1;

  expect(hasCycle(node0)).toBeTruthy();
});

test("Given the head of a linked list, should determine if the linked list has a cycle in it (Example 2)", () => {
  let node0 = {};
  ListNode.call(node0, 1);

  let node1 = {};
  ListNode.call(node1, 2);

  node0.next = node1;
  node1.next = node0;

  expect(hasCycle(node0)).toBeTruthy();
});

test("Given the head of a linked list, should determine if the linked list has a cycle in it (Example 3)", () => {
  let node0 = {};
  ListNode.call(node0, 1);

  expect(hasCycle(node0)).toBeFalsy();
});

test("Given the head of a linked list, should determine if the linked list has a cycle in it (Example 4)", () => {
  let node0 = {};

  expect(hasCycle(node0)).toBeFalsy();
});
