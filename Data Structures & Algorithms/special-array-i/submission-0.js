class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        if(nums.length === 1)
            return true;

        var j = 0;
        for(var i = 1; i < nums.length; i++) {
            var isOdd = nums[j] % 2 !== 0;
            var isEven = nums[i] % 2 === 0;
            if ((isOdd && isEven) || (!isOdd && !isEven)) {
                j++;
                continue;
            }
            return false;
        }

        return true;
    }
}
