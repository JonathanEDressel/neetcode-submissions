class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var res = 0;
        var l = 0, r = heights.length - 1;
        while(l < r) {
            var area = Math.min(heights[l], heights[r]) * (r - l);
            res = area > res ? area : res;
            if(heights[l] > heights[r])
                r--;
            else
                l++;
        }
        return res;
    }
}
