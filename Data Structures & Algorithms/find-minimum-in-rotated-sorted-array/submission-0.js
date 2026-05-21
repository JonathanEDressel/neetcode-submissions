class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        var res = 0;
        var minIdx = 0, minVal = Infinity;
        for(var i = 0; i < nums.length; i++) {
            if(nums[i] < minVal) {
                minVal = nums[i];
                minIdx = i;
            }
        }
        return minVal;
    }
}
