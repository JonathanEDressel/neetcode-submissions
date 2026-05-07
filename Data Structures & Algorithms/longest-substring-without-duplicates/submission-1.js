class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        var track = new Map();
        var res = 0;
        var l = 0, r = 0;
        while(r < s.length) {
            if(track.has(s[r])) {
                track.delete(s[l]);
                l++;
            }
            else {
                track.set(s[r], 1);
                r++;
            }
            res = Math.max(res, track.size);
        }
        return res;
    }
}
