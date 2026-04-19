class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        var mapper = new Map();
        for(var i = 0; i < nums.length; i++) {
            if(mapper.has(nums[i]))
                mapper.set(nums[i], mapper.get(nums[i]) + 1);
            else
                mapper.set(nums[i], 1);
        }

        for (const [k, v] of mapper) {
            if(v === 1)
                return k;
        }
        return -1;
    }
}
