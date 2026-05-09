class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        var res = 0, curr = 0;
        for(var i = 0; i < nums.length; i++) {
            if(nums[i] === 0) {
                res = res < curr ? curr : res;
                curr = 0;
            }
            else
                curr++;
        }

        return res < curr ? curr : res;
    }
}
