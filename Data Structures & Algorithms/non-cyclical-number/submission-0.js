class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    getDigits(n) {
        var arr = [];
        while(n !== 0) {
            var d = n % 10;
            arr.push(d);
            n = Math.floor(n / 10);
        }
        return arr;
    }

    getSum(arr) {
        var res = 0;
        for(var i = 0; i < arr.length; i++) {
            res += (arr[i] * arr[i]);
        }
        return res;
    }

    isHappy(n) {
        var tracker = new Map();
        while(n !== 1) {
            var arr = this.getDigits(n);
            n = this.getSum(arr);
            if(tracker.has(n))
                return false;
            tracker.set(n, 1);
        }
        return true;
    }
}
