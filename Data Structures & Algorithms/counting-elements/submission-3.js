class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        arr.sort();
        var tracker = new Map();
        for(var i = 0; i < arr.length; i++) {
            if(tracker.has(arr[i]))
                tracker.set(arr[i], tracker.get(arr[i]) + 1);
            else
                tracker.set(arr[i], 1);
        }
        console.log(tracker)
        var res = 0;
        for(var i = 1; i < arr.length; i++) {
            if((arr[i-1] + 1) === arr[i]) {
                console.log(arr[i-1])
                res += tracker.get(arr[i-1]);
            }
        }
        return res;
    }
}
