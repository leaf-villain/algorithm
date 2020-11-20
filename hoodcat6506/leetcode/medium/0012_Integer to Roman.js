/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
  const INT_ROMAN_MAP = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };
  let loop = ('' + num).length;
  let dividend = num;
  let result = '';

  for (; loop > 0; loop--) {
    // 1. diviend 의 가장 앞자리 수를 구한다.
    const divisor = 10 ** (loop - 1);
    const quotient = Math.trunc(dividend / divisor);
    let strLength = quotient;

    // 2. 가장 앞자리 수를 제외한 나머지를 다음 dividend 으로 넘긴다.
    dividend = dividend % divisor;

    // 3. 가장 앞자리 수가 맵에 있는지 체크
    if (INT_ROMAN_MAP[quotient * divisor]) {
      result += INT_ROMAN_MAP[quotient * divisor];
    } else {
      // 4. 없는 경우 5보다 크면 해당 자리수의 5에 해당하는 문자를 앞에 붙여준다.
      if (quotient > 5) {
        result += INT_ROMAN_MAP[5 * divisor];
        strLength -= 5;
      }
      // 5. 해당 자리수의 1에 해당하는 문자를 길이만큼 붙여준다.
      result += (new Array(strLength)).fill(INT_ROMAN_MAP[divisor]).join('');
    }
  }

  return result;
};
