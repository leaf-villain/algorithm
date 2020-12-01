/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 23. Merge k Sorted Lists
 * https://leetcode.com/problems/merge-k-sorted-lists
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  return _divide(lists);

  /**
   * 분할
   *
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  function _divide(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    const midIdx = Math.trunc(lists.length / 2);
    const left = _divide(lists.slice(0, midIdx));
    const right = _divide(lists.slice(midIdx));

    return _conquer(left, right);
  }

  /**
   * 정복
   *
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  function _conquer(list1, list2) {
    if (list1 && !list2) return list1;
    else if (!list1 && list2) return list2;
    else if (!list1 && !list2) return null;

    let head = null;
    if (list1.val > list2.val) {
      head = list2;
      list2 = list2.next;
    } else {
      head = list1;
      list1 = list1.next;
    }
    let tail = head;


    while (list1 || list2) {
      if (!list1) {
        tail.next = list2;
        return head;
      }

      if (!list2) {
        tail.next = list1;
        return head;
      }

      if (list1.val > list2.val) {
        tail.next = list2;
        list2 = list2.next;
      } else {
        tail.next = list1;
        list1 = list1.next;
      }

      tail = tail.next;
    }

    return head;
  }
};
