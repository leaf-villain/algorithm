/**
 * 16. 3Sum Closest
 * https://leetcode.com/problems/3sum-closest/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
  // 1. 입력배열 정렬
  nums.sort((a, b) => a - b);
  let result = Infinity;

  for (let first = 0; first < nums.length - 2; first++) {
    // 2. Two pointer 알고리즘을 이용하여, first 인덱스에 따른 근접값 계산
    let second = first + 1;
    let third = nums.length - 1;

    while (second < third) {
      const threeSum = nums[first] + nums[second] + nums[third];
      const diff = target - threeSum;
      if (diff === 0) return threeSum;

      result = Math.abs(target - result) < Math.abs(diff) ? result : threeSum;
      if (diff > 0) second++;
      else third--;
    }
  }

  return result;
};
