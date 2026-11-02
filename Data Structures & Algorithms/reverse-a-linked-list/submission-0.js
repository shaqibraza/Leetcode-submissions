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
        this.prev = null;
        this.curr = head;
        this.next = null;
        
        while(this.curr != null){
            this.next = this.curr.next;
            this.curr.next = this.prev;

            this.prev = this.curr;
            this.curr = this.next;
        }

        return this.prev;
    }
}
