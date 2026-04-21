class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    getDigit(n) {
        var res = 0;
        while(n > 0) {
            res += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }
        return res;
    }

    isHappy(n) {
        var tracker = new Map();
        while(n > 1) {
            n = this.getDigit(n);
            if(tracker.has(n))
                return false;
            tracker.set(n, 1);
        }
        return true;
    }
}
