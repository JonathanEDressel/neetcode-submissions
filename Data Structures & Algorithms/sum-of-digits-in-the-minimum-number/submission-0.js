class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    sumOfDigits(nums) {
        var min = Math.min(...nums);

        //26
        //2.6
        var sum = 0;
        while(min > 0) {
            sum += min % 10;
            min = Math.trunc(min/10);
        }

        return sum % 2 === 0 ? 1 : 0;
    }
}
