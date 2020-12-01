/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 21. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  if (l1 && !l2) return l1;
  else if (!l1 && l2) return l2;
  else if (!l1 && !l2) return null;

  let head = null;
  let tail = head;

  if (l1.val > l2.val) {
    head = l2;
    tail = head;
    l2 = l2.next;
  } else {
    head = l1;
    tail = head;
    l1 = l1.next;
  }

  while (l1 || l2) {
    if (!l1) {
      tail.next = l2;
      return head;
    }

    if (!l2) {
      tail.next = l1;
      return head;
    }

    if (l1.val > l2.val) {
      tail.next = l2;
      l2 = l2.next;
    } else {
      tail.next = l1;
      l1 = l1.next;
    }

    tail = tail.next;
  }

  return head;
};
