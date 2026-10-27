class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length === 1)
            return 0;
        var res = 0;

        var l = 0, r = l + 1;
        while(r < prices.length) {
            var diff = prices[r] - prices[l];
            res = res > diff ? res : diff;
            if (prices[l] > prices[r])
             l = r;

            r++;
        }

        return res;
    }
}
