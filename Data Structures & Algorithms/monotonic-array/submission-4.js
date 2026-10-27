class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        var isInc = true, isDec = true;

        for(var i = 1; i < nums.length; i++) {
            var idx1 = nums[i-1], idx2 = nums[i];
            if(idx1 < idx2)
                isDec = false;

            if(idx1 > idx2)
                isInc = false;
        }
        return isInc || isDec;
    }
}
