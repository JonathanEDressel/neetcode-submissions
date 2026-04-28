class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        var res = 0;
        var tracker = new Set(arr);
        for(var i = 0; i < arr.length; i++)
            if(tracker.has(arr[i] + 1))
                res++;
        return res;
    }
}
