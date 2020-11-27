/**
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/
 *
 * @param {number[]} nums
 * @return {[number[]]}
 */
const threeSum = function(nums) {
  // 1. 입력받은 배열을 정렬
  nums.sort((a, b) => a - b);
  const resultMap = new Map();
  // 2. 숫자에 대한 인덱스 맵 정의
  const NUMS_INDEX_MAP = nums.reduce((acc, num, index) => {
    acc.set(num, index);
    return acc;
  }, new Map());

  for (let first = 0; first < nums.length - 2; first++) {
    // 3. 중복결과 체크
    if (nums[first] === nums[first - 1]) continue;
    for (let second = first + 1; second < nums.length - 1; second++) {
      // 4. 두 수의 합에 대한 인덱스가 존재하는가, 존재하면 두 번째 인덱스 보다 큰가?
      const twoSum = nums[first] + nums[second];
      const third = NUMS_INDEX_MAP.get(-twoSum);
      if (!third || (second >= third)) {
        continue;
      }

      // 5. 결과를 결과 해쉬에 저장(중복결과를 없애기 위함)
      resultMap.set(
        `${nums[first]}${nums[second]}${nums[third]}`,
        [nums[first], nums[second], nums[third]]);
    }
  }

  // 6. 해쉬의 값들을 반환
  return Array.from(resultMap.values());
};
