class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        var n = nums.length; 
        if(n === 1)
            return true;
        for(var i = 1; i < n; i++) {
            if(nums[i-1] & 2 === nums[i] & 2)
                return false;
        }
        return true;
    }
}
