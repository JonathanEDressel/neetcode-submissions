class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(arr) {
        var l = 0, r = arr.length - 1;
        var res = 0;
        while(l < r) {
            var tmp = (r - l) * (arr[r] < arr[l] ? arr[r] : arr[l]);
            res = res > tmp ? res : tmp;
            if(arr[l] <= arr[r])        
                l++;
            else
                r--;
        }
        return res;
    }
}
