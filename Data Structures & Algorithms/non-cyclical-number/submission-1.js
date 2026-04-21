class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    getDigit(n) {
        var res = 0;
        while(n > 0) {
            var d = n % 10;
            res += (d * d);
            n = Math.floor(n / 10);
        }
        return res;
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
            n = this.getDigit(n);
            if(tracker.has(n))
                return false;
            tracker.set(n, 1);
        }
        return true;
    }
}
