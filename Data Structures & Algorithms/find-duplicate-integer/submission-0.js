class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        var slow = 0, fast = 1;
        while(true) {
            if(fast >= nums.length)
                fast = 0;
            if(slow >= nums.length)
                slow = 0;
            if(slow === fast)
                fast++;
            if(nums[slow] === nums[fast])
                return nums[slow];
            slow++;
            fast = slow + 1;
        }
        return -1;        
    }
}
