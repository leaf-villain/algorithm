/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 19. Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  const nodeList = [];
  let node = head;
  while (node) {
    nodeList.push(node);
    node = node.next;
  }

  const nthIndex = nodeList.length - n;
  if (nthIndex === 0) { // case 1. 첫번째 노드일 때
    head = nodeList[1] ?? null;
  } else if (nthIndex === nodeList.length - 1) { // case 2. 마지막 노드일 때
    nodeList[nthIndex - 1].next = null;
  } else {
    const prevNthNode = nodeList[nthIndex - 1];
    const nextNthNode = nodeList[nthIndex + 1];
    prevNthNode.next = nextNthNode;
  }

  return head;
};
