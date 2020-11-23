// https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/
// "익숙한 언어"
using System;
using System.Linq;

public class Solution {
    // local struct 정의는 아직 안 된다는듯?
    struct IterState {
      internal int lastIdx;
      internal int lastVal;
    }

    public int RemoveDuplicates(int[] nums) {
      // Skip(1) 이 크래시가 나는데, OrNull 메서드를 못 찾겠음.
      if (nums.Length == 0) { return 0; }
        
      var resultState = nums.Skip(1).Aggregate(
        // 초기값은 named anon tuple 사용
        (lastIdx: 0, lastVal: nums[0]),

        // aggregate 본문
        (state, val) => {
          if (val > state.lastVal) {            
            nums[state.lastIdx + 1] = val;
            return (lastIdx: state.lastIdx + 1, lastVal: val);
          } else {
            return state;
          }
      });

      return resultState.lastIdx + 1;
    }
}