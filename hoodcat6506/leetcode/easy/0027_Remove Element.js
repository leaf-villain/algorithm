/**
 * 27. Remove Element
 * https://leetcode.com/problems/remove-element
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  const count = nums.filter((num) => num === val).length;
  nums.sort((num) => num === val ? 1 : -1);

  return nums.length - count;
};
