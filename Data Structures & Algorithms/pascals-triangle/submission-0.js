class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        var res = [];
        for(var i = 0; i < numRows; i++) {
            var r = [1];
            var val = 1;
            for(var j = 1; j <= i; j++) {
                val = (val * (i - j + 1)) / j;
                r.push(val);
            }

            res.push(r);
        }
        return res;
    }
}
