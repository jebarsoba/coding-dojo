const {
  ListNode,
  getIntersectionNode,
} = require("../src/160-intersection-of-two-linked-lists_constant-time");

test("given the heads of two singly linked-lists headA and headB, should return the node at which the two lists intersect (Example 1)", () => {
  let listA1 = new ListNode(4);
  let listA2 = new ListNode(1);
  let listA3 = new ListNode(8);
  let listA4 = new ListNode(4);
  let listA5 = new ListNode(5);
  listA1.next = listA2;
  listA2.next = listA3;
  listA3.next = listA4;
  listA4.next = listA5;

  let listB1 = new ListNode(5);
  let listB2 = new ListNode(6);
  let listB3 = new ListNode(1);
  listB1.next = listB2;
  listB2.next = listB3;
  listB3.next = listA3;

  expect(getIntersectionNode(listA1, listB1)).toBe(listA3);
});

test("given the heads of two singly linked-lists headA and headB, should return the node at which the two lists intersect (Example 2)", () => {
  let listA1 = new ListNode(1);
  let listB1 = listA1;

  expect(getIntersectionNode(listA1, listB1)).toBe(listA1);
});

test("given the heads of two singly linked-lists headA and headB, should return the node at which the two lists intersect (Example 3)", () => {
  let listA1 = new ListNode(3);
  let listB1 = new ListNode(2);
  listB1.next = listA1;

  expect(getIntersectionNode(listA1, listB1)).toBe(listA1);
});

test("given the heads of two singly linked-lists headA and headB, should return the node at which the two lists intersect (Example 4)", () => {
  let listA1 = new ListNode(1);
  let listA2 = new ListNode(2);
  listA1.next = listA2;

  let listB1 = listA2;

  expect(getIntersectionNode(listA1, listB1)).toBe(listA2);
});
