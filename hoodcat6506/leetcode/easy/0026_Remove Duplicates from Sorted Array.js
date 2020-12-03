/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array
 *
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let offset = 0;
  let count = 1;
  for (let index = 0; index < nums.length; index++) {
    if (nums[offset] !== nums[index]) {
      nums[++offset] = nums[index];
      count++;
    }
  }

  return count;
};
