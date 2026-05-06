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
    isPalindrome(head) {
        var root = head;
        var arr = [];
        while(root) {
            arr.push(root.val);
            root = root.next;
        }

        root = head;
        while(root) {
            var v = root.val;
            var d = arr.pop();
            if(v !== d)
                return false;
            root = root.next
        }
       
        return true;
    }
}
