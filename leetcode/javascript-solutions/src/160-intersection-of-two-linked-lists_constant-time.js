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
  let aLength = 0;
  while (currentA) {
    ++aLength;
    currentA = currentA.next;
  }
  let bLength = 0;
  while (currentB) {
    ++bLength;
    currentB = currentB.next;
  }

  let gap = Math.abs(aLength - bLength);
  let currentLonger = bLength > aLength ? headB : headA;
  let currentShorter = currentLonger === headB ? headA : headB;

  while (currentShorter && currentLonger) {
    if (currentLonger === currentShorter) {
      return currentShorter;
    }
    currentLonger = currentLonger.next;
    if (gap === 0) {
      currentShorter = currentShorter.next;
    } else {
      --gap;
    }
  }
  return null;
};

module.exports = {
  ListNode,
  getIntersectionNode,
};
