class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        var l = 0;
        while(l < nums.length) {
            if(nums[l] === 0) {
                var r = l+1;
                while(nums[r] === 0)
                    r++;
                if(r >= nums.length)
                    break;
                nums[l] = nums[r];
                nums[r] = 0;
            }
            l++;
        }

        return nums;
    }
}
