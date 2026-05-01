class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        var copy = [...heights];
        heights.sort((a, b) => a - b);
        var diff = 0;
        for(var i = 0; i < copy.length; i++) {
            if(copy[i] !== heights[i])
                diff++;
        }
        return diff;
    }
}
