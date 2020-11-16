//https://leetcode.com/problems/median-of-two-sorted-arrays/
#include<algorithm>
#include<vector>
#include<iostream>
using namespace std;

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
       vector<int> t(nums1.begin(), nums1.end());
        t.insert(t.end(), nums2.begin(), nums2.end());
        
        sort(t.begin(), t.end());
        if(t.size()%2 == 0) {
            int indx = t.size()/2;
            double a = (t[indx] + t[indx-1])/2.0;
            return a;
        }
        else {
            return t[t.size()/2];
        }
    }
};