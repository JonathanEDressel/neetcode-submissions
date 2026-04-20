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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        var fast = head.next;
        var faster = fast;

        while(fast && fast.next) {
            if(fast === faster)
                return true;

            faster = fast.next.next;
            fast = fast.next;
        }
        return false;
    }
}
