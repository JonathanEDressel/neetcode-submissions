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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        var tmp = new ListNode();
        var res = tmp; 
        var carry = 0;

        while(l1 || l2 || carry) {
            var t = 0;
            if(l1) {
                t += l1.val;
                l1 = l1.next;
            }
            if(l2) {
                t += l2.val;
                l2 = l2.next;
            }
            if(carry) {
                t += carry;
            }
            carry = Math.trunc(t / 10);
            tmp.next = new ListNode(t % 10);
            tmp = tmp.next;
        }

        return res.next;
    }
}







