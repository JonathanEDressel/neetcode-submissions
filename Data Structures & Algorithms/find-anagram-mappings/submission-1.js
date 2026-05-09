class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        var tracker1 = new Map();
        for(var i = 0; i < nums1.length; i++) {
            tracker1.set(nums1[i], 0);
        }

        for(var i = 0; i < nums2.length; i++) {
            tracker1.set(nums2[i], i);
        }
        var res = [];
        for(const [k, v] of tracker1)
            res.push(v);
        return res;
    }
}
