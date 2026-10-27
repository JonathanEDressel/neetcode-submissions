class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        var map = new Map();
        var len = nums.length;
        for(var i = 0; i < len; i++) {
            var count = 1;
            if(map.has(nums[i])) {
                count += map.get(nums[i]);
            }
            map.set(nums[i], count);
            if(count / 2 >= .5)
                return nums[i];
        }
        return -1;
    }
}
