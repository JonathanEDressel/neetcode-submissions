class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var map = new Map();
        for(var i = 0; i < nums.length; i++) {
            var val = target - nums[i];
            if(map.has(val)) {
                return [i, map.get(val)];
            }
            map.set(nums[i], i)
        }
        return [-1,-1];
    }
}
