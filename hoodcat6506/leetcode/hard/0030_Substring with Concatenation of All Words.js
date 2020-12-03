/**
 * 30. Substring with Concatenation of All Words
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words
 *
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function(s, words) {
  const result = [];
  const WORD_LENGTH = words[0].length;
  const TOTAL_WORD_LENGTH = WORD_LENGTH * words.length;
  let offset = 0;

  while (offset < s.length - TOTAL_WORD_LENGTH + 1) {
    const wordIndexMap = words.reduce((acc, word, idx) => {
      acc[word] = acc[word] || 0;
      acc[word]++;
      return acc;
    }, {});
    let passFlag = true;
    let subOffset = null;
    for (let loop = 0; loop < words.length; loop++) {
      subOffset = offset + loop * WORD_LENGTH;
      const SUB_STR = s.slice(subOffset, subOffset + WORD_LENGTH);
      if (!wordIndexMap[SUB_STR]) {
        passFlag = false;
        break;
      }
      wordIndexMap[SUB_STR]--;
    }

    if (passFlag) result.push(offset);
    offset += 1;
  }

  return result;
};
