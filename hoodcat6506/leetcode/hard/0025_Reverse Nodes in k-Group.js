/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 25. Reverse Nodes in k-Group
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function(head, k) {
  if (!head.next) return head;

  const nodeGroup = [];
  let groupHead = head; // 그룹의 헤드
  let prevGroupTail = null; // 이전 그룹의 테일
  let groupReverseFuc = firstGroupReverse; // 루프
  let result = null; // 결과

  while (groupHead) {
    groupReverseFuc();
  }

  return result;

  // 함수정의
  /**
   * 첫번째 루프
   *
   * @return {undefined}
   */
  function firstGroupReverse() {
    const initResult = initGroup();
    if (!initResult) return (result = head);
    result = reverse();

    prevGroupTail = nodeGroup[0];
    prevGroupTail.next = groupHead;
    nodeGroup.length = 0;

    groupReverseFuc = groupReverse;
  }

  /**
   * 첫번째 이후 루프
   *
   * @return {undefined}
   */
  function groupReverse() {
    const initResult = initGroup();
    if (!initResult) return;
    const head = reverse();

    prevGroupTail.next = head;
    prevGroupTail = nodeGroup[0];
    prevGroupTail.next = groupHead;
    nodeGroup.length = 0;
  }

  /**
   * 그룹 초기화
   *
   * @return {boolean}
   */
  function initGroup() {
    debugger;
    for (let idx = 0; idx < k; idx++) {
      if (!groupHead) return false;
      nodeGroup.push(groupHead);
      groupHead = groupHead.next;
    }
    return true;
  }

  /**
   * 그룹 리버스
   *
   * @return {ListNode} 리버스 된 그룸의 헤드
   */
  function reverse() {
    debugger;
    for (let idx = 0; idx < k; idx++) {
      nodeGroup[idx].next = nodeGroup[(k + idx - 1) % k];
    }
    return nodeGroup[nodeGroup.length - 1];
  }
};
