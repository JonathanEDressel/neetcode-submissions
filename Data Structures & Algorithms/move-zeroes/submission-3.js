class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        var l = 0, r = 0;
        while(l < nums.length && r < nums.length) {
            if(nums[l] === 0) {
                r = l+1;
                while(nums[r] === 0)
                    r++;
                if(r >= nums.length)
                    break;
                nums[l] = nums[r];
                nums[r] = 0;
            }
            else {
            }
            l++;
        }

        return nums;
    }
}
