class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        var s = x.toString();
        var l = 0, r = s.length - 1;
        while(l < r) {
            if(s.charAt(l) !== s.charAt(r))
                return false;
            l++;
            r--;
        }
        return true;
    }
}
