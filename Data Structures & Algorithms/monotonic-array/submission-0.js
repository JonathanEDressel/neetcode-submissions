class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        var check = 0; //1 - monotonic asc, 2 - montonic desc
        for(var i = 1; i < nums.length; i++) {
            //[1,2,2,3]
            if(nums[i-1] === nums[i]) {
                continue;
            }
            if(nums[i-1] < nums[i]) {
                if(check === 2)
                    return false;
                check = 1;
            }
            else if(nums[i-1] > nums[i]) {
                if(check === 1)
                    return false;
                check = 2;
            }
        }
        return true;
    }
}
