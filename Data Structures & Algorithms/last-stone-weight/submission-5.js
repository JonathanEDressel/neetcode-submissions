class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        stones.sort((x, y) => x - y);
        
        while(stones.length > 1) {
            var diff = stones.pop() - stones.pop();
            if (diff > 0) {
                stones.push(diff);
            }
            stones.sort((x, y) => x - y);
        }
        return stones.length > 0 ? stones[0] : 0;
    }
}
