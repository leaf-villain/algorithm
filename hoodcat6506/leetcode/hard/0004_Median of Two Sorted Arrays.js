/**
 * 4. Median of Two Sorted Arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  // 1. 입력으로 받으 두 배열의 길이 합을 통해 중간 인덱스를 구함
  const TOTAL_LENGTH = nums1.length + nums2.length;
  const MEDIAN_INDEX = Math.trunc((TOTAL_LENGTH - 1) / 2);
  let index1 = 0;
  let index2 = 0;
  let result = 0;
  let loop = MEDIAN_INDEX;

  // 2. 0번째 인덱스부터 시작해서 각 배열의 요소를 비교하여 result 갱신
  do {
    if (nums1[index1] === undefined) {
      result = nums2[index2++];
    } else if (nums2[index2] === undefined) {
      result = nums1[index1++];
    } else {
      result = (nums1[index1] > nums2[index2]) ?
        nums2[index2++] :
        nums1[index1++];
    }

    loop--;
  } while (loop > -1);

  // 3. 두 배열의 길이 합이 짝수인 경우 한 번더 비교하여 result에 합해준 후 2로 나눔
  if (TOTAL_LENGTH % 2 === 0) {
    if (nums1[index1] === undefined) {
      result += nums2[index2++];
    } else if (nums2[index2] === undefined) {
      result += nums1[index1++];
    } else {
      result += (nums1[index1] > nums2[index2]) ?
        nums2[index2++] :
        nums1[index1++];
    }

    result /= 2;
  }
  return result;
};
