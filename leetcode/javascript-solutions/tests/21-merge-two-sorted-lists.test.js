const { ListNode, mergeTwoLists } = require("../src/21-merge-two-sorted-lists");

test("given two sorted lists, should merge them into a new sorted list (Example 1)", () => {
  let ln11 = {};
  let ln12 = {};
  let ln13 = {};
  ListNode.call(ln13, 4);
  ListNode.call(ln12, 2, ln13);
  ListNode.call(ln11, 1, ln12);

  let ln21 = {};
  let ln22 = {};
  let ln23 = {};
  ListNode.call(ln23, 4);
  ListNode.call(ln22, 3, ln23);
  ListNode.call(ln21, 1, ln22);

  let expectedLn1 = {};
  let expectedLn2 = {};
  let expectedLn3 = {};
  let expectedLn4 = {};
  let expectedLn5 = {};
  let expectedLn6 = {};
  ListNode.call(expectedLn6, 4);
  ListNode.call(expectedLn5, 4, expectedLn6);
  ListNode.call(expectedLn4, 3, expectedLn5);
  ListNode.call(expectedLn3, 2, expectedLn4);
  ListNode.call(expectedLn2, 1, expectedLn3);
  ListNode.call(expectedLn1, 1, expectedLn2);

  expect(mergeTwoLists(ln11, ln21)).toEqual(expectedLn1);
});

test("given two sorted lists, should merge them into a new sorted list (Example 2)", () => {
  const ln11 = {};
  const ln21 = {};
  const expectedLn1 = {};

  expect(mergeTwoLists(ln11, ln21)).toEqual(expectedLn1);
});

test("given two sorted lists, should merge them into a new sorted list (Example 3)", () => {
  const ln11 = {};

  let ln21 = {};
  ListNode.call(ln21, 0);

  let expectedLn1 = {};
  ListNode.call(expectedLn1, 0);

  expect(mergeTwoLists(ln11, ln21)).toEqual(expectedLn1);
});

test("given two sorted lists, should merge them into a new sorted list (Example 4)", () => {
  let ln11 = {};
  ListNode.call(ln11, 2);

  let ln21 = {};
  ListNode.call(ln21, 1);

  let expectedLn1 = {};
  let expectedLn2 = {};
  ListNode.call(expectedLn2, 2);
  ListNode.call(expectedLn1, 1, expectedLn2);

  expect(mergeTwoLists(ln11, ln21)).toEqual(expectedLn1);
});
