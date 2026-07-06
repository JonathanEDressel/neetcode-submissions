class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        var l = 0, r = s.length - 1, flags = 1;

        while(l <= r) {
            if(s[l] === s[r]) {
                l++;
                r--;
                continue;
            }
            if(s[l] === s[r-1])
                r--;
            else if(s[l+1] === s[r])
                l++;
            flags--;
            if(flags < 0)
                return false;
        }

        return flags >= 0;
    }
}
