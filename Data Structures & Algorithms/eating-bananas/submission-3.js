class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    getK(piles, k) {
        var res = 0;
        for(var i = 0; i < piles.length; i++) {
            res += Math.trunc(piles[i] / k);
            res += piles[i] % k === 0 ? 0 : 1;
        }
        return res;
    }

    minEatingSpeed(piles, h) {
        var high = Math.max(...piles);
        var low = 1;

        while(low < high) { 
            var mid = Math.trunc((high + low) / 2);
            var k = this.getK(piles, mid);

            if(k <= h) { 
                high = mid;
            }
            else {
                low = mid+1;
            }

        }

        return low;
    }
}
