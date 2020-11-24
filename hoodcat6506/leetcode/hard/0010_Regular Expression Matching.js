/**
 * 10. Regular Expression Matching
 * https://leetcode.com/problems/regular-expression-matching/
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
  // 1. 결과를 담을 이차원 배열 선언(초기상태는 모두 false)
  const RESULT_BOARD = Array.from({length: s.length + 1},
    () => Array.from({length: p.length + 1}, () => false));

  // 2. 문자열 s = '' 일 때, 패턴 p에 따른 결과 저장
  RESULT_BOARD[0][0] = true;
  for (let index = 1; index <= p.length; index++) {
    if (p[index - 1] === '*') {
      RESULT_BOARD[0][index] = RESULT_BOARD[0][index - 2];
    }
  }

  // 3. s와 p의 인덱스를 추가하면서 결과를 채워넣음
  for (let sIndex = 1; sIndex <= s.length; sIndex++) {
    for (let pIndex = 1; pIndex <= p.length; pIndex++) {
      if (p[pIndex - 1] === '*') {
        if (p[pIndex - 2] === '.' || p[pIndex - 2] === s[sIndex - 1]) {
          // .* 에 해당하는 문자의 길이가 1 이상일 때
          RESULT_BOARD[sIndex][pIndex] = RESULT_BOARD[sIndex][pIndex - 2] || RESULT_BOARD[sIndex - 1][pIndex];
        } else {
          // .* 에 해당하는 문자의 길이가 0 일 때
          RESULT_BOARD[sIndex][pIndex] = RESULT_BOARD[sIndex][pIndex - 2];
        }
      } else if (p[pIndex - 1] === '.' || p[pIndex - 1] === s[sIndex - 1]) {
        // 패턴의 문자와 일치 할 때
        RESULT_BOARD[sIndex][pIndex] = RESULT_BOARD[sIndex - 1][pIndex - 1];
      }
    }
  }

  return RESULT_BOARD[s.length][p.length];
};
