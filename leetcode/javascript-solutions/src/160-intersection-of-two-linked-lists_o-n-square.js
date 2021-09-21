// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let currentA = headA;
  let currentB = headB;

  while (currentA) {
    while (currentB) {
      if (currentB === currentA) {
        return currentA;
      }
      currentB = currentB.next;
    }
    currentA = currentA.next;
    currentB = headB;
  }
  return null;
};

module.exports = {
  ListNode,
  getIntersectionNode,
};
