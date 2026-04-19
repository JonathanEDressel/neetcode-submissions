class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    validCharacter(c) {
        return (c >= 48 && c <= 57) || (c >= 97 && c <= 122);
    }
    isPalindrome(s) {
        var l = 0, r = s.length - 1;
        while(l < r) {
            var lc = s[l].toLowerCase().charCodeAt(0);
            var rc = s[r].toLowerCase().charCodeAt(0);
            
            if(this.validCharacter(lc) && this.validCharacter(rc)) {
                if (lc === rc) {
                    l++;
                    r--;
                }
                else {
                    return false;
                }
            }
            else {
                if (!this.validCharacter(lc))
                    l++;
                if (!this.validCharacter(rc))
                    r--;
            }
        }
        return true;
    }
}
