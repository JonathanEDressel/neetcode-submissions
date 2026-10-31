class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    sumOfDigits(nums) {
        var min = Math.min(...nums);
        var sum = 0;
        while(min) {
            sum += min % 10;
            min = Math.floor(min/10);
        }
        return sum % 2 === 0 ? 1 : 0;
    }
}
