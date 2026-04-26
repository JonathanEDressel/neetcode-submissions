class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(var i = 0; i < nums.length; i++) {
            for(var j = 0; j < nums.length; j++) {
                if(i === j)
                    continue;
                if(nums[i] === nums[j])
                    return nums[i];
            }
        }
        return -1;        
    }
}
