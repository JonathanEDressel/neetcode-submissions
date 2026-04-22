class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        var len = 0;
        for(var i = s.length - 1; i >= 0; i--) {
            if(s[i] === ' ' && len > 0) 
                return len;
            if(s[i] !== ' ')
                len++;
        }
        return len;
    }
}
