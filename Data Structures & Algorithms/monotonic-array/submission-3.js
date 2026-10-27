class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        var isInc = true, isDec = true;

        for(var i = 1; i < nums.length; i++) {
            if(nums[i-1] < nums[i])
                isDec = false;

            if(nums[i-1] > nums[i])
                isInc = false;
            if(!isInc && !isDec)
                return false;
        }
        return isInc || isDec;
    }
}
