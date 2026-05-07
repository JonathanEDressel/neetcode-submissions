class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var track = new Map();
        for(var i = 0; i < strs.length; i++) {
            var s = strs[i].split("").sort().join("");;
            var tmp = [];
            if(track.has(s)) {
                tmp = track.get(s);
            }
            tmp.push(strs[i]);
            track.set(s, tmp);
        }
        var res = []
        for(const [k, v] of track) {
            res.push(v);
        }

        return res;
    }
}
