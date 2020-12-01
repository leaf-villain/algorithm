/**
 * 22. Generate Parentheses
 * https://leetcode.com/problems/generate-parentheses
 *
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  const result = [];
  _backTracking(0, 0, '');

  return result;

  /**
   * 백트래킹
   *
   * @param {number} level
   * @param {number} val
   * @param {string} char
   */
  function _backTracking(level, val, char) {
    if (val < 0 || Math.abs(val) > 2 * n) return;
    if (level === 2 * n) {
      if (val === 0) result.push(char);
      return;
    }
    _backTracking(level + 1, val + 1, char + '(');
    _backTracking(level + 1, val - 1, char + ')');
  }
};
