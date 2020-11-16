//https://leetcode.com/problems/string-to-integer-atoi/
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int myAtoi(string s) {
        string t = "";
        int unary = 0; // 0 is +
        int num=0;
        int max = 2147483647;
        int min = -2147483648;
        int cnt = 0;
        int n_cnt = 0;
        for(int i = 0 ; i < s.length(); i++) {
            if(s[i] == ' ') {
                if(cnt > 0) {
                    break;
                }
                continue;
            }
            
            if((s[i] == '+' || s[i] == '-') && cnt == 0) {
                t.push_back(s[i]);
                cnt++;

            }
            else if(0 <= s[i] -'0' && s[i]-'0' <= 9) {
                t.push_back(s[i]);
                cnt++;
                n_cnt++;
                
            }
            else {
                if(n_cnt == 0) {
                    t = "0";
                }
                break;
            }
        }
        cout << t << endl;
        if(t.length() > 0) {
            try {
                long long t_n = stoll(t);
            
                if( max >= t_n && min <= t_n ) {
                    num = stoi(t);
                }
                else if (max < t_n) {
                    num = 2147483647;
                }
                else if( min > t_n) {
                    num = -2147483648;
                }
            }
            catch(...) {
                if(t.length() > 1) {
                    if(t[0] == '-') {
                        num = -2147483648;
                    }
                    else { 
                        num = 2147483647;
                    }
                }
                else {
                    num = 0;
                }
                return num;
            }
        }
        
        return num;
    }
};