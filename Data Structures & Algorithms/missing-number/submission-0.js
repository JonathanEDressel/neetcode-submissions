class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        for(var i = 1; i < nums.length; i++) {
            if(nums[i-1] + 1 !== nums[i]) {
                return nums[i-1] + 1;
            }
        }
        return 0;
    }
}
