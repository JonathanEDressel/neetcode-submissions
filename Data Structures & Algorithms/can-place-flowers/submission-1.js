class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        for(var i = 0; i < flowerbed.length; i++) {
            if(flowerbed[i] === 0) {
                var cond1 = !flowerbed[i-1] || flowerbed[i-1] === 0;
                var cond2 = !flowerbed[i+1] || flowerbed[i+1] === 0;
                if(cond1 && cond2) {
                    n--;
                    flowerbed[i] = 1;
                }
            }
        }

        return n <= 0;
    }
}
