class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    canPermutePalindrome(s) {
        var tracker = new Map();
        for(var i = 0; i < s.length; i++) {
            var d = 1;
            if(tracker.has(s[i]))
                d += tracker.get(s[i]);
            tracker.set(s[i], d);
        }
        var count = 0;
        for(const [k, v] of tracker) {
            if(v % 2 !== 0)
                count++;
        }

        return count <= 1;
    }
}
