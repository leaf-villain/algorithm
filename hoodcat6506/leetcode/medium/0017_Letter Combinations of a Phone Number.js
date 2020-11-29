/**
 * 17. Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number
 *
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  const NUMBER_ALPHA_MAP = {
    '': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  return combination(digits);

  /**
   *
   * @param {string} digits
   * @return {string[]}
   */
  function combination(digits) {
    if (digits.length < 2) return NUMBER_ALPHA_MAP[digits];

    const medium = Math.trunc(digits.length / 2);
    const left = combination(digits.slice(0, medium));
    const right = combination(digits.slice(medium));
    return left.reduce((acc, leftStr) => {
      right.forEach((rightStr) => {
        acc.push(leftStr + rightStr);
      });
      return acc;
    }, []);
  }
};
