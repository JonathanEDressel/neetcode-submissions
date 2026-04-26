class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        nums.sort();
        for(var i = 1; i < nums.length; i++) {
            if(nums[i] === nums[i-1])
                return nums[i];
        }
        return -1;
    }
}
