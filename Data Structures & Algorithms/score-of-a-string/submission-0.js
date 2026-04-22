class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        var res = 0;
        for(var i = 1; i < s.length; i++) {
            res += Math.abs(s[i].charCodeAt(0) - s[i-1].charCodeAt(0));
        }
        return res;
    }
}
