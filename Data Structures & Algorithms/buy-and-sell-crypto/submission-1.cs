public class Solution {
    public int MaxProfit(int[] prices) {
        int res = 0;
        int l = 0, r = 1;
        while(r < prices.Length) {

            //[2,1,2,1,0,1,2]
            //l = 0
            //r = 1
            if(prices[l] > prices[r]) {
                l = r;
            }
            int check = prices[r] - prices[l];
            if(check > res) {
                res = check; 
            }
            r++;
        }
        return res;
    }
}
