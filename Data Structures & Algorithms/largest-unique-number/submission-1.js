class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    largestUniqueNumber(nums) {
        var res = -1;
        var tracker = new Map();
        for(var i = 0; i < nums.length; i++) {
            var d = 1;
            if(tracker.has(nums[i])) {
                d = tracker.get(nums[i]) + 1;
            }
            tracker.set(nums[i], d);
        }
        for(const [k, v] of tracker) {
            if(v === 1 && k > res) {
                res = k;
            }
        }
        return res;
    }
}
