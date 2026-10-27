class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        var monoDir = 0;
        var currV = nums[0];

        for(var i = 0; i < nums.length; i++) {
            if(currV === nums[i])
                continue;
            
            if(monoDir == 0) {
                if(currV > nums[i])
                    monoDir = 2; //negative
                else 
                    monoDir = 1; //positive
            }
            else {
                if((monoDir == 1 && currV > nums[i]) || (monoDir == 2 && currV < nums[i]))
                    return false;
            }
            currV = nums[i]
        }
        return true;
    }
}
