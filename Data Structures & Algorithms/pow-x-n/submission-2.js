class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */

    helper(x, n) {
        if(n === 0)
            return 1;
        if(n === 1)
            return x;
        return x * this.helper(x, n - 1);
    }

    myPow(x, n) {
        var res = this.helper(x, Math.abs(n));

        return n >= 0 ? res : 1 / res;
    }
}
