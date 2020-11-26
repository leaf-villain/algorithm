/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  const length = s.length;
  /**
   * s = 'babad' 일 때, 만들어지는 결과
   * [
   *  ['b',    'a',   'b',  'a',  'd'],
   *  ['ba',   'ab',  'ba', 'ad'],
   *  ['bab',  'aba', 'bad'],
   *  ['baba', 'abad'],
   *  ['babad']
   * ]
   */
  const PALINDROME_RESULT = Array.from({length}, (_, idx) => new Array(length - idx));
  let result = '';

  // 1. 나올수 있는 서브문자열의 초기화 과정
  for (let subStrLen = 0; subStrLen < length; subStrLen++) {
    for (let offset = 0; offset < PALINDROME_RESULT[subStrLen].length; offset++) {
      const sub = s.slice(offset, offset + subStrLen + 1);
      // 2. 서브문자열의 첫 글자와 마지막 글자 비교, 같지 않으면 false
      if (sub[0] === sub[sub.length - 1]) {
        // 3. 중간문자가 빈 문자열 이거나 이전 결과에서 palindrome 문자면 ture, 아니면 false
        const mid = sub.slice(1, -1);
        if (mid === '' || PALINDROME_RESULT[subStrLen - 2][offset + 1]) {
          PALINDROME_RESULT[subStrLen][offset] = true;
          // 4. palindrome 문자의 최대길이 갱신
          result = result.length >= sub.length ? result : sub;
        } else {
          PALINDROME_RESULT[subStrLen][offset] = false;
        }
      } else {
        PALINDROME_RESULT[subStrLen][offset] = false;
      }
    }
  }

  return result;
};
