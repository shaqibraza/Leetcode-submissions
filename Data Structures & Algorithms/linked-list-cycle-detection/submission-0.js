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
        this.slow = head;
        this.fast = head;

        while(this.fast != null && this.fast.next != null){
            this.slow = this.slow.next;
            this.fast = this.fast.next.next;

            if(this.slow == this.fast){
                return true;
            }
        }

        return false;
    }
}
