class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        var map = new Map();
        var len = nums.length;
        var check = Math.trunc(len / 2);

        for(var i = 0; i < len; i++) {
            var count = 1;
            if(map.has(nums[i])) {
                count += map.get(nums[i]);
            }
            map.set(nums[i], count);
            if(count > check)
                return nums[i];
        }
        return -1;
    }
}
