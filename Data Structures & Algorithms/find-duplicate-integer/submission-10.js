class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        var tracker = new Map();
        for(var i = 0; i < nums.length; i++) {
            if(tracker.has(nums[i]))
                return nums[i];
            tracker.set(nums[i], 1);
        }
        return -1;
    }
}
