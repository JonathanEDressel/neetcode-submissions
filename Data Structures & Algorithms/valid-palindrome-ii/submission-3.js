class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        var l = 0, r = s.length - 1;

        while(l <= r) {
            if(s[l] !== s[r])
                return this.isPal(s, l + 1, r) || this.isPal(s, l, r - 1);
            l++;
            r--;
        }
        return true;
    }

    isPal(s, l, r) {
        while(l <= r) {
            if(s[l] !== s[r])
                return false;
            l++;
            r--;
        }
        return true;
    }
}
