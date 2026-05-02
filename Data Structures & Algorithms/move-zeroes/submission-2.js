class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        var track = [];
        for(var i = 0; i < nums.length; i++) {
            if(nums[i] !== 0)
                track.push(nums[i]);
        }
        var count = track.length;
        var idx = 0;
        for(var i = 0; i < nums.length; i++) {
            if(idx < count) {
                nums[i] = track[idx];
                idx++;
            }
            else
                nums[i] = 0;
        }

        return nums;
    }
}
