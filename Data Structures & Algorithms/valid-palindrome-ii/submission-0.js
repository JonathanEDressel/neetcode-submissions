class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        var l = 0, r = s.length - 1;
        var count = 0;

        while(l < r) {
            if(s[l] !== s[r])
                count++;
            l++;
            r--;
        }

        return count <= 1;
    }
}
