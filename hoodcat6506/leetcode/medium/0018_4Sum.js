/**
 * 18. 4Sum
 * https://leetcode.com/problems/4sum
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {[number[]]}
 */
const fourSum = function(nums, target) {
  const result = new Map;
  const TWO_SUM_INDEX_MAP = new Map();
  nums.sort((a, b) => a - b);

  // 1. 두 수의 합을 키로 하는 인덱스들의 맵을 만든다.
  for (let first = 0; first < nums.length - 1; first ++) {
    for (let second = first + 1; second < nums.length; second++) {
      const twoSum = nums[first] + nums[second];
      let indexList = TWO_SUM_INDEX_MAP.get(twoSum);
      if (!indexList) {
        indexList = [];
        TWO_SUM_INDEX_MAP.set(twoSum, indexList);
      }
      indexList.push([first, second]);
    }
  }

  // 2. 두 수의 합들로 이루어진 배열을 정렬한 후, Two pointer 알고리즘을 적용
  const twoSumList = Array.from(TWO_SUM_INDEX_MAP.keys()).sort((a, b) => a - b);
  let head = 0;
  let tail = twoSumList.length - 1;
  while (head <= tail) {
    const fourSum = twoSumList[head] + twoSumList[tail];
    // 3. 두 수의 합을 이루는 인덱스들을 집합에 넣고 사이즈가 4 미만인지 비교
    //   4 이상이면 수를 정렬하고 인덱스에 해당하는 수로 변경 후 result 맵에 추가
    if (fourSum === target) {
      const twoSumLeft = TWO_SUM_INDEX_MAP.get(twoSumList[head++]);
      const twoSumRight = TWO_SUM_INDEX_MAP.get(twoSumList[tail--]);
      for (let leftIdx = 0; leftIdx < twoSumLeft.length; leftIdx++) {
        for (let rightIdx = 0; rightIdx < twoSumRight.length; rightIdx++) {
          const fourSumIdx = Array.from(new Set([
            ...twoSumLeft[leftIdx],
            ...twoSumRight[rightIdx],
          ]));
          if (fourSumIdx.length < 4) continue;
          fourSumIdx.sort((a, b) => a - b);
          const fourSumNum = fourSumIdx.map((idx) => nums[idx]);
          result.set(fourSumNum.join(), fourSumNum);
        }
      }
    } else if (fourSum < target) head++;
    else tail--;
  }

  return Array.from(result.values());
};
