/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length;
    var dp = Array.from({length: len}, (_, idx) => new Array(len-idx));
    var result = '';

    for (var i=0; i < dp.length ; i++) {
        for(var j=0; j < dp[i].length ; j++) {
            var sub = s.slice(j, j+i+1);
            if (sub[0] === sub[sub.length-1]) {
                var mid = sub.slice(1, -1);
                if(mid === '' || dp[i-2][j+1]) {
                    dp[i][j] = true;
                    result = result.length >= sub.length ? result : sub;
                }else {
                    dp[i][j] = false;
                }
            } else {
                dp[i][j] = false;
            }
        }
    }
        
    return result;
};