class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        var res = 0;
        for(var i = 0; i < nums.length; i++) {
            for(var j = 0; j < nums.length; j++) {
                if(i === j)
                    continue;
                if(nums[i] === nums[j])
                    res++;
            }
        }
        return Math.floor(res/2);
    }
}
