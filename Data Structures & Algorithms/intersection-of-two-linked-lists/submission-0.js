/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        var track = new Set();
        while(headA) {
            track.add(headA);
            headA = headA.next;
        }

        while(headB) {
            if(track.has(headB))
                return headB;
            headB = headB.next;
        }
        return null;
    }
}
