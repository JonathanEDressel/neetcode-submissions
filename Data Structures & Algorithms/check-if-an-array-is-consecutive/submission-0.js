class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isConsecutive(nums) {
        nums.sort();
        for(var i = 1; i < nums.length; i++)
            if(nums[i-1] + 1 !== nums[i])
                return false;
        return true;
    }
}
