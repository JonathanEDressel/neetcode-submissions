class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var res = new Map();
        for(var i = 0; i < nums.length; i++) {
            if(res.has(nums[i]))
                return true;
            res.set(nums[i], 0);
        }
        return false;
    }
}
