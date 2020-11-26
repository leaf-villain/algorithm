/**
 * 13. Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 *
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  let result = 0;
  // 1. 로마숫자에 대해 매핑되는 정수 맵 정의
  const ROMAN_INTEGER_MAP = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // 2. 첫 문자부터 조회
  for (let index = 0; index < s.length; index++) {
    let number = ROMAN_INTEGER_MAP[s[index]];
    // 3. 앞 자리가 1로 시작하는 문자 앞에 5 또는 10을 곱한 문자가 있는 경우(IV, IX etc)
    if (s[index + 1] &&
        (number * 5 === ROMAN_INTEGER_MAP[s[index + 1]] ||
        number * 10 === ROMAN_INTEGER_MAP[s[index + 1]])) {
      number = ROMAN_INTEGER_MAP[s[++index]] - number;
    }
    // 4. 해당 숫자를 result에 더해줌
    result += number;
  }

  return result;
};
