class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        //[9,9]
        if(digits.length === 0)
            return [1];

        if(digits[digits.length - 1] < 9) {
            digits[digits.length - 1]++;
            return digits;
        }
        else {
            digits[digits.length - 1] = 0;
            return [...this.plusOne(digits.slice(0, digits.length - 1)), 0];
        }
    }
}
