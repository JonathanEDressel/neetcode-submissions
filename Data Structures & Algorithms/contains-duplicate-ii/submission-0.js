class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsDup (arr, i, j, k) {
        return arr[i] === arr[j] && Math.abs(i - j) <= k;
    }

    containsNearbyDuplicate(nums, k) {
        var res = 0;
        for(var i = 0; i < nums.length-1; i++) {
            for(var j = i + 1; j < nums.length; j++)
                if(this.containsDup(nums, i, j, k))
                    return true;
        }
        return false;
    }
}
