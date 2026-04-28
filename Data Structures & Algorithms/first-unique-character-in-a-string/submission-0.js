class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        var tracker = new Map();
        for(var i = 0; i < s.length; i++) {
            var c = s[i];
            if(tracker.has(c)) {
                tracker.set(c, tracker.get(c) + 1);
            }
            else {
                tracker.set(c, 1);
            }
        }
        for(const [k, v] of tracker) {
            if(v === 1)
                return s.indexOf(k);
        }
        return -1;
    }
}
