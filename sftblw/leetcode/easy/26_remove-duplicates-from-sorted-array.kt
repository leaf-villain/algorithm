// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// "익숙한 언어"
class Solution {
    /**
    in-place replaces input array
    @returns length of in-place replaced array
    */
    fun removeDuplicates(nums: IntArray): Int {
        if (nums.isEmpty()) { return 0 }
        
        var lastIdx = 0
        var lastVal = nums.first()
        nums.drop(1).forEachIndexed { idx, v ->
            if (v > lastVal) {
                lastIdx += 1
                nums[lastIdx] = v
                lastVal = v
            }
        }
        
        return lastIdx + 1
    }
}