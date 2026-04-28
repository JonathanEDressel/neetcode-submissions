class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        arr.sort((a, b) => a - b); //O(n log n)
        var tracker = new Map();
        for(var i = 0; i < arr.length; i++) { //O(n)
            if(tracker.has(arr[i]))
                tracker.set(arr[i], tracker.get(arr[i]) + 1);
            else
                tracker.set(arr[i], 1);
        }
        var res = 0;
        for(var i = 1; i < arr.length; i++) { //O(n)
            if((arr[i-1] + 1) === arr[i]) {
                res += tracker.get(arr[i-1]);
            }
        }
        return res;
    }
}
