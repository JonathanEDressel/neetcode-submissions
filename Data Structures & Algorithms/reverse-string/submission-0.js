class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        var l = '', r = '';
        var lIdx = 0, rIdx = s.length - 1;
        while(lIdx < rIdx) {
            l = s[lIdx];
            r = s[rIdx];
            s[lIdx] = r;
            s[rIdx] = l;
            lIdx++;
            rIdx--;
        }
        return s;
    }
}
