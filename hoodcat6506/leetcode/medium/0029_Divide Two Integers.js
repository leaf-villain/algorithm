/**
 * 29. Divide Two Integers
 * https://leetcode.com/problems/divide-two-integers
 *
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
  const MAX_INTEGER = ~0 >>> 1; // 01111111_11111111_11111111_11111111
  const MIN_INTEGER = ~(MAX_INTEGER); // 10000000_00000000_00000000_00000000
  const result = Math.trunc(dividend / divisor);

  if (result > MAX_INTEGER) return MAX_INTEGER;
  if (result < MIN_INTEGER) return MIN_INTEGER;
  return result;
};
