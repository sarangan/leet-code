const { ListNode, TreeNode, createListOnArr } = require('./tools');
const findMid = (head) => {
  console.log(head.val);
  let prev = head, slow = head, fast = head;
  while (fast.next && fast.next.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  return [prev, slow];
};

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {

  const traverse = (node) => {
    // console.log(head.val);
    if (!node) return null;
    const [prev, mid] = findMid(node);
    if (prev === mid) {
      const t = new TreeNode(prev.val);
      t.right = prev.next;
      return t;
    } else {
      prev.next = null;
      let r = new TreeNode(mid.val);
      r.left = traverse(node);
      r.right = traverse(mid.next);
      return r;
    }
  };

  return traverse(head);
};

const data = createListOnArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(sortedListToBST(data));