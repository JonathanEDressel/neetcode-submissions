class Solution {
    /**
     * @param {number[]} gifts
     * @param {number} k
     * @return {number}
     */



    pickGifts(gifts, k) {
        var j = 0;
        var res = 0;
        while(j < k) {
            var max = 0, idx = 0;
            for(var i = 0; i < gifts.length; i++) {
                if(max < gifts[i]) {
                    idx = i;
                    max = gifts[i];
                }
            }
            gifts[idx] = Math.floor(Math.sqrt(gifts[idx]))
            j++;
        }
        for(var i = 0; i < gifts.length; i++)
            res += gifts[i];

        return res;
    }
}
