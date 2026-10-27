class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        var l = 0, r = s.length - 1;
        while(l < r) {
            var c = s[l];
            s[l] = s[r];
            s[r] = c;
            l++;
            r--;
        }
        return s;
    }
}
