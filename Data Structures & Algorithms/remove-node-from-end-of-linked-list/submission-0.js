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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(head == null || head.next == null) return null;

        // find the size of the linked list
        let size = 0;
        let curr = head;
        while(curr != null){
            curr = curr.next;
            size++;
        }

        if(size == n){
            return head.next;
        }

        if(head.next.next == null){
            head.next = null;
            return head;
        }
    
        const idxToSearch = size - n;
        let prev = head;
        let i = 1;
        while(i < idxToSearch){
            prev = prev.next;
            i++;
        }

        prev.next = prev.next.next;
        return head;
    }
}
