
//https://leetcode.com/problems/decoded-string-at-index/
class Solution {
public:
    string decodeAtIndex(string S, int K) {
        string str = "";
        unsigned long long size = 0;
        for(int i = 0 ; i < S.length() ; i ++) {
            if('0'<= S[i] && S[i] <= '9') {
                long long digit = S[i] -'0';
                cout << size << endl;
                size *= digit;
            }
            else {
                size++;    
            }
            
        }
        
        for(int i = S.length() -1 ; i >= 0 ; i --) {
            K %= size;
            if(K == 0 && !('0'<= S[i] && S[i] <= '9')) {
               str += S[i];
                break;
            }
            
            if(('0'<= S[i] && S[i] <= '9')) {
                size /= (S[i]-'0');
            }
            else {
                size--;
            }
        }
      
        
        return str;
    }
};