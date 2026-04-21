class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        var r = 1;
        var res = [];
        var d = 0;
        for(var i = digits.length - 1; i >= 0; i--) {
            d = 0;
            if((digits[i] + r) % 10 === 0)
                r = 1;
            else {
                d = digits[i] + r;
                r = 0;
            }
            res.push(d);
        }
        if(r > 0)
            res.push(r);
        return res.reverse();
    }
}
