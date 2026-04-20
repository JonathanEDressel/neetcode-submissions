class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for(var i = 0; i < arr.length - 1; i++) {
            var t = arr[i+1] !== undefined ? arr[i+1] : -1;
            arr[i] = t;
            for(var j = i + 2; j < arr.length; j++) {
                if(arr[j] > arr[i])
                    arr[i] = arr[j]
            }
        }
        return arr;
    }
}
