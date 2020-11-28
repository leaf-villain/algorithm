/**
 * 167. Two Sum II - Input array is sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  // 1. 숫자에 대한 인덱스 맵 정의
  const NUM_INDEX_MAP = numbers.reduce((acc, num, index) => {
    let indexList = acc.get(num);
    if (!indexList) {
      indexList = [];
      acc.set(num, indexList);
    }
    indexList.push(index);
    return acc;
  }, new Map());
  let head = 0;
  let tail = numbers.length - 1;
  // 2. Two pointer 알고리즘을 이용한 탐색
  while (head < tail) {
    const sum = numbers[head] + numbers[tail];
    if (target === sum) {
      return [
        NUM_INDEX_MAP.get(numbers[head]).shift() + 1,
        NUM_INDEX_MAP.get(numbers[tail]).shift() + 1,
      ];
    } else if (target > sum) head++;
    else tail--;
  }

  return [];
};
