//https://leetcode.com/problems/zigzag-conversion/
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    string convert(string s, int numRows) {
        
        vector<string> sv(numRows);
        int t = 1;
        for(int i = 0 ; i < numRows; i++) {
            sv[i] = "";
        }
        
        sv[0].push_back(s[0]);
      
        bool b = true;
        if(numRows == 1) {
            return s;
        }
       
        for(int i = 1 ; i < s.length() ; i++) {
            
            if(b) {
                for(int j = t ; j < numRows; j++) {
                    
                    if(i < s.length()) {
                        sv[j].push_back(s[i]);
                    }
                    ++i;
                }
                --i;
                t = numRows-2;
                b = false;
            }
            else {
                for(int j = t; j >= 0; j--) {
                    if(i < s.length()) {
                        sv[j].push_back(s[i]);
                    }
                     ++i;
                }
                --i;
                t = 1;
                b = true;
            }

        }
        string ans= "";
        for(auto st : sv) {
            ans += st;
        }
        return ans;
    }
};