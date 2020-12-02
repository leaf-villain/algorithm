/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 24. Swap Nodes in Pairs
 * https://leetcode.com/problems/swap-nodes-in-pairs
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
  if (!head) return null; // length = 0;
  if (!head.next) return head; // length = 1;

  // length > 1;
  let nextPairHead = head;
  let prevPairTail = null;
  let pairHead = nextPairHead;
  let pairTail = nextPairHead.next;
  const result = pairTail;

  // swap
  pairHead.next = pairTail.next;
  pairTail.next = pairHead;
  prevPairTail = pairHead;
  nextPairHead = pairHead.next;

  if (!(nextPairHead && nextPairHead.next)) return result;

  do {
    pairHead = nextPairHead;
    pairTail = nextPairHead.next;

    // swap
    pairHead.next = pairTail.next;
    pairTail.next = pairHead;

    prevPairTail.next = pairTail;
    prevPairTail = pairHead;
    nextPairHead = pairHead.next;
  } while (!!(nextPairHead && nextPairHead.next));

  return result;
};
