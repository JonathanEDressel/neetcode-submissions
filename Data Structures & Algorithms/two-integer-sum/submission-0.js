class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var res = {};

        for(var i = 0; i < nums.length; i++) {
            var n = target - nums[i];
            if(n in res)
                return [i, res[n]];
            res[nums[i]] = i;
        }
        return [];

    }
}
