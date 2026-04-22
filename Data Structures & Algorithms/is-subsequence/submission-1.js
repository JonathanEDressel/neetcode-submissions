class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if(t.length < s.length)
            return false;
        var sIdx = 0;
        for(var i = 0; i < t.length; i++) {
            if(t[i] === s[sIdx]) 
                sIdx++;
        }
        return sIdx === s.length;
    }
}
