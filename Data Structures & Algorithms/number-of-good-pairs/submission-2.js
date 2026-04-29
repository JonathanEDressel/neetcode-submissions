class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        var res = 0;
        var tracker = new Map();
        for(var i = 0; i < nums.length; i++) {
            res += tracker.get(nums[i]) ?? 0;
            tracker.set(nums[i], (tracker.get(nums[i]) ?? 0) + 1);
        }
        return res;
    }
}
