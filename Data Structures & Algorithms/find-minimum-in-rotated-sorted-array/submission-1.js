class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        var minVal = Infinity;
        for(var i = 0; i < nums.length; i++) {
            if(nums[i] < minVal) {
                minVal = nums[i];
                minIdx = i;
            }
        }
        return minVal;
    }
}
