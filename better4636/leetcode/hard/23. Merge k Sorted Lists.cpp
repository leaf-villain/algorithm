//https://leetcode.com/problems/merge-k-sorted-lists/
#include<vector>
#include<algorithm>
using namespace std;
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        vector<int> v;
        
        for(auto n : lists) {
            for(auto i = n ; i != nullptr; i = i->next) {
                v.emplace_back(i->val);
            }
        }
        
        sort(v.begin(), v.end());
        
        if(v.size() == 0) {
            return nullptr;
        }
        ListNode* n = new ListNode();
        auto t = n;
        
        for(int i =0; i < v.size() ; i++) {
            t->val= v[i];
            if(t->next == nullptr && i < v.size()-1) {
                t->next = new ListNode();
            }
            t = t->next;
        }
        
        return n;
    }
};