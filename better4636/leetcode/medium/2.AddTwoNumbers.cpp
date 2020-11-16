// https://leetcode.com/problems/add-two-numbers/submissions/
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

#include <vector>
using namespace std;

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int carry = 0;
        ListNode* l3 = l1;
        ListNode* l4 = l2;
        vector<int> nodes;
        while(l3 != nullptr || l4 != nullptr) {
            int x,y;
            x = (l3 == nullptr)? 0 : l3->val;
                
            y = (l4 == nullptr) ? 0 : l4->val;
            
            int sum = x+y +carry;
            carry = sum/10;
            nodes.push_back(sum%10);
            if(l3 != nullptr) {
                l3 = l3->next;
            }
            if(l4 != nullptr) {
                l4 = l4->next;
            }
            
            if(l3 == nullptr && l4 == nullptr && carry > 0) {
                nodes.push_back(carry);
            }
            
        }
        
        ListNode* ans = new ListNode();
        ListNode* tmp = ans;
        for( int i = 0 ; i < nodes.size() ; i ++ ) {
            
            tmp->val = nodes[i];
            if(tmp->next == nullptr && i != nodes.size()-1) {
                tmp->next = new ListNode();
            }
            tmp = tmp->next;
        }
        return ans;
    }
   
};