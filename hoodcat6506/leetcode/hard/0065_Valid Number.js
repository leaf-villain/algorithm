/*
 * 65. Valid Number
 * https://leetcode.com/problems/valid-number/
 */

/**
 * 타입캐스팅을 이용한 풀이
 *
 * @param {string} s
 * @return {boolean}
 */
const isNumber1 = function(s) {
  const numStr = s.trim();
  if (numStr.length < 1) {
    return false;
  }
  return !isNaN(+numStr);
};

/**
 * 정규표현식을 이용한 풀이
 *
 * @param {string} s
 * @return {boolean}
 */
const isNumber2 = function(s) {
  return /^[+-]?(\d+\.?|\.\d+|\d+\.\d+)(e[+-]?\d+)?$/
    .test(s.trim());
};
