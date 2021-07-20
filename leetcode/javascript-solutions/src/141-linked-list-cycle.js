// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let current = head;
  let visited = new Map();
  visited.set(current, true);

  while (current && current.next) {
    if (visited.get(current.next)) {
      return true;
    }

    current = current.next;
    visited.set(current, true);
  }

  return false;
};

module.exports = { ListNode, hasCycle };
