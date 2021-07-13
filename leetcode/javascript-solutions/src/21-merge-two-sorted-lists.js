// Definition for singly-linked list
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = (l1, l2) => {
  const insertSorted = (val, list) => {
    if (val === undefined) {
      return {};
    }

    if (!list || list.val === undefined) {
      list = {};
      ListNode.call(list, val);
      return list;
    }

    let inserted = false;
    let prev = null;
    let cur = list;
    while (cur) {
      if (cur.val > val) {
        let newNode = {};
        ListNode.call(newNode, val, cur);

        if (prev) {
          prev.next = newNode;
        } else {
          list = newNode;
        }

        inserted = true;
        return list;
      }

      prev = cur;
      cur = cur.next;
    }

    if (!inserted) {
      let newNode = {};
      ListNode.call(newNode, val);
      prev.next = newNode;
    }

    return list;
  };

  let res = null;

  // The whole solution could be simplified by using a single while loop to traverse both lists at the same time ...
  let cur = l1;
  while (cur) {
    res = insertSorted(cur.val, res);
    cur = cur.next;
  }

  cur = l2;
  while (cur) {
    res = insertSorted(cur.val, res);
    cur = cur.next;
  }

  return res;
};

module.exports = { ListNode, mergeTwoLists };
