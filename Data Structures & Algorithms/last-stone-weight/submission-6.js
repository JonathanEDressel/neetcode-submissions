class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    lastStoneWeight(stones) {
        var maxPQ = new MaxPriorityQueue();
        for(var s of stones) {
            maxPQ.enqueue(s);
        }            
        
        while(maxPQ.size() > 1) {
            var d1 = maxPQ.dequeue();
            var d2 = maxPQ.dequeue();
            if(d1 !== d2) {
                maxPQ.enqueue(d1 - d2);
            }
        }
        return maxPQ.size() === 1 ? maxPQ.dequeue() : 0;
    }
}
