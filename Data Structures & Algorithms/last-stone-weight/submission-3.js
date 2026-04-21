class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        stones.sort((x, y) => x - y);
        
        while(stones.length > 1) {
            console.log(stones)
            var d1 = stones.pop();
            var d2 = stones.pop();
            if (d1 !== d2) {
                var d = d1 > d2 ? (d1 - d2) : (d2 - d1);
                stones.push(d);
            }
            stones.sort((x, y) => x - y);
        }
            console.log(stones)
        return stones.length > 0 ? stones[0] : 0;
    }
}
