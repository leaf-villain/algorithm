//https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
#include<string>
#include <algorithm>
#include <map>
class Solution {
public:

    int minSteps(string s, string t) {
        map<char, int> cm;
        for(int i = 0 ; i < s.length() ; i++) {
            cm[s[i]]++;
        }
        for(int i = 0 ; i < t.length(); i++) {
            cm[t[i]]--;
        }
        
        int ans = 0;
        for(auto it = cm.begin(); it != cm.end(); it++) {
            if(it->second < 0) {
                ans += -it->second;
            }
        }
        
        return ans;
    }
};