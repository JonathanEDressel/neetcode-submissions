class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        var track = new Map();
        for(var i = 0; i < nums1.length; i++) {
            track.set(nums1[i], 0);
        }

        for(var i = 0; i < nums2.length; i++) {
            track.set(nums2[i], i);
        }
        return [...track.values()]
    }
}
