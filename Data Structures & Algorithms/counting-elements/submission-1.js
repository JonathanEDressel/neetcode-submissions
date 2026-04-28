class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        arr.sort();
        var res = 0;
        for(var i = 1; i < arr.length; i++) {
            if((arr[i-1] + 1) === arr[i])
                res++;
        }
        return res;
    }
}
