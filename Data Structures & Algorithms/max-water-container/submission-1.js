class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var maxSurfaceArea = 0;
        var l = 0, r = heights.length - 1;
        while(l < r) {
            var area = (r - l) * Math.min(heights[l], heights[r]);
            maxSurfaceArea = area > maxSurfaceArea ? area : maxSurfaceArea

            if(heights[l] < heights[r])
                l++;
            else
                r--;

        }
        return maxSurfaceArea;
    }
}
