class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        var incrementFast = nums.length % 2 === 0 ? 2 : 3;
        var slow = 0, fast = 0;
        while(true) {
            if(slow === fast)
                fast++;
            if(fast >= nums.length)
                fast = 0;
            if(slow >= nums.length)
                slow = 0;
            if(nums[slow] === nums[fast])
                return nums[slow];
            slow++;
            fast += incrementFast;
        }
        return -1;        
    }
}
