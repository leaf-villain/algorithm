//https://leetcode.com/problems/reveal-cards-in-increasing-order/
#include <queue>
#include <algorithm>
using namespace std;
class Solution {
public:
    vector<int> deckRevealedIncreasing(vector<int>& deck) {
        vector<int> t(deck.size());
        queue<int> q;
        sort(deck.begin(), deck.end());
        
        for(int i =0 ; i < deck.size(); i++) {
            q.push(i);
        }
        
        for(auto x : deck) {
            t[q.front()] = x;
            q.pop();
            if(!q.empty()) {
                q.push(q.front());
                q.pop();
            }
        }
        return t;
    }
};