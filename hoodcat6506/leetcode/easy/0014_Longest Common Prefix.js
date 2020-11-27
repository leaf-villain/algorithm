/**
 * 14. Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  let result = '';
  if (strs.length === 1) {
    return strs[0];
  }

  const MIN_LENGTH = Math.min(...(strs.map((str) => str.length)));

  if (!Number.isInteger(MIN_LENGTH)) {
    return '';
  }

  for (let loop = 0, offset = 0; loop < MIN_LENGTH; loop++) {
    let flag = true;
    for (let index = 0; index < strs.length - 1; index++) {
      if (!strs[index][offset] || !strs[index][offset]) {
        return '';
      }
      if (strs[index][offset] !== strs[index + 1][offset]) {
        flag = false;
        return result;
      }
    }
    if (flag) {
      result += strs[0][offset++];
    }
  }
  return result;
};
