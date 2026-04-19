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
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head) {
            return null;
        }

        var newhead = head;
        console.log(head.val)
        if (head.next) {
            newhead = this.reverseList(head.next);
            head.next.next = head;
            console.log('inside - ', head.val)
        }
        head.next = null;

        return newhead;
    }
}
