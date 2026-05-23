class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        var track = new Map();
        //track => {40: [0,1]}
        for(var i = 0; i < nums2.length; i++) {
            var v = nums2[i];
            if(!track.has(v)) 
                track.set(v, []);
            track.get(v).push(i);
        }

        var res = [];
        for(var i = 0; i < nums1.length; i++) {
            var v = track.get(nums1[i]);
            res.push(v.pop());
        }

        return res;
    }
}
