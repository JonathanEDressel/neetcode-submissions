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
        var fast = head;
        var faster = head;

        while(fast && fast.next) {
            fast = fast.next;
            faster = faster.next.next;
            if(fast === faster)
                return true;
        }
        return false;
    }
}
