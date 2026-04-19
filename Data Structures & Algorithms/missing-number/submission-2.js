class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        nums.sort((a, b) => a - b);
        if (nums[0] !== 0) return 0;
        for(var i = 1; i < nums.length; i++) {
            if(nums[i-1] + 1 !== nums[i]) {
                return nums[i-1] + 1;
            }
        }
        return nums.length;
    }
}
