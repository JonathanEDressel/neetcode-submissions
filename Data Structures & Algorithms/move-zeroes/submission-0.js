class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        var l = 0, r = 0;

        //[1, 2, 5, 0, 0, 0]
        //                r
        //          l
        while(r < nums.length && l < nums.length) {
            while(nums[r] === 0)
                r++;
            if(r >= nums.length)
                break;
                
            if(nums[l] === 0) {
                nums[l] = nums[r];
                nums[r] = 0;
            }
            l++;
        }

        return nums;
    }
}
