class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        var r = 1;
        for(var i = digits.length - 1; i >= 0; i--) {
            var sum = digits[i] + r;
            digits[i] = sum % 10;
            r = Math.floor(sum / 10);
        }
        if(r)
            digits.unshift(r);
        return digits;
    }
}
