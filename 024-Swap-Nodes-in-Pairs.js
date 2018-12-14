const { ListNode, createListOnArr, linkListToArray } = require('./tools');


var swapPairs = function(head) {
  if (!head) return head;
  if (!head.next) return head;

  const nullHead = new ListNode();
  nullHead.next = head;
  let prev = nullHead, first = head, second = head.next, next = second.next;

  while (second) {
    second.next = first;
    first.next = next;
    prev.next = second;

    // even
    if (next === null) break;
    // odd
    if (next.next === null) break;
    prev = first;
    first = next;
    second = next.next;

    next = second.next;
  }
  return nullHead.next;
};

console.log(linkListToArray(swapPairs(createListOnArr([]))));
