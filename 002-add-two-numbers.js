const { ListNode, createListOnArr } = require('./tools');

//Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//Output: 7 -> 0 -> 8
//Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  const result = new ListNode();
  let lastNode;

  while (l1 && l2) {
    if (l1.val === undefined && l2.val === undefined) {
      break;
    }

    let
      v1 = l1.val || 0,
      v2 = l2.val || 0,
      v = v1 + v2;

    if (carry === 1) {
      v += carry;
      carry = 0;
    }

    if (v >= 10) {
      v = v % 10;
      carry = 1;
    }

    const n = new ListNode(v);
    if (lastNode) {
      lastNode.next = n;
      lastNode = lastNode.next;
    } else {
      result.next = n;
      lastNode = n;
    }

    l1 = l1.next || new ListNode();
    l2 = l2.next || new ListNode();
  }
  if (carry === 1) {
    lastNode.next = new ListNode(carry);
  }
  return result.next;
};

console.log(addTwoNumbers(
  createListOnArr([1, 8]),
  createListOnArr([0])
));

