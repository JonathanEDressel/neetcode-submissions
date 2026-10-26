class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    doesQualify(piles, k) { //[1,4,3,2], k = 2
        var r = 0;
        for(var i = 0; i < piles.length; i++) {
            r += (Math.trunc(piles[i]/k));
            r += piles[i] % k === 0 ? 0 : 1;
        }
        return r;
    }

    minEatingSpeed(piles, h) {
        var min = Infinity;

        var high = Math.max(...piles);

        var l = 0;
        var m = 0;

        while(l < high) {
            m = Math.floor((l + high) / 2); 

            var r = this.doesQualify(piles, m);
            min = r < min ? r : min;

            if(r <= h)
                high = m;
            else
                l = m + 1;
        }

        return l;
    }
}
