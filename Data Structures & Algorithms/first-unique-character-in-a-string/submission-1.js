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
                tracker.set(c, -1);
            }
            else {
                tracker.set(c, i);
            }
        }
        var min = Infinity;
        for(const [k, v] of tracker) {
            if(v !== -1)
                min = Math.min(min, v);
        }
        return min === Infinity ? -1 : min;
    }
}
