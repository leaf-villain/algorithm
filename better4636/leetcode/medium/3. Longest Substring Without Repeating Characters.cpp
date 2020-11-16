//https://leetcode.com/problems/longest-substring-without-repeating-characters/
#include<string>
#include<iostream>
using namespace std;

class Solution {
public:  
    int lengthOfLongestSubstring(string s) {
        string a = "";
        int t = 0;
        int res =0;
        
        if(s.length() == 0) {
            return 0;
        }
        
        while(t <= s.length()-1) {
            int cnt = 0;
            bool isFind = false;
            for(int i = t; i < s.length(); i++) {
                if(a.find(s[i]) != std::string::npos) {
                    if(res < cnt) {
                        res =cnt;    
                    }
                    isFind = true;
                    a = "";
                    break;
                }
                a.push_back(s[i]);
                ++cnt;
            }
            t++;
            if(!isFind && cnt > 0) {
                t = s.length();
                if(cnt > res) {
                    res = cnt;
                }
            }
        }
        return res;
    }
};