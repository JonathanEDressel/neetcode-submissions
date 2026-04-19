class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        var str = "";
        for(var i = 0; i < digits.length; i++) {
            str += digits[i];
        }
        return String(parseInt(str) + 1);
    }
}
