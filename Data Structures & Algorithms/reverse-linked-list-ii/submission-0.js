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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let dummy = new ListNode(0);
        dummy.next = head;

        let leftPre = dummy;
        let curr = head;
        for(let i = 0; i < left - 1; i++){
            leftPre = leftPre.next;
            curr = curr.next;
        }

        let subListHead = curr;

        let pre = null;
        for(let i = 0; i <= right - left; i++){
            let nextNode = curr.next;
            curr.next = pre;

            pre = curr;
            curr = nextNode;
        }

        leftPre.next = pre;
        subListHead.next = curr;

        return dummy.next;
    }
}
