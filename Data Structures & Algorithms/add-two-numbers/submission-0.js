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
        if(l1 == null) return l2;
        if(l2 == null) return l1;

        let dummy = new ListNode(-1);
        const ans = dummy;

        let ptr1 = l1;
        let ptr2 = l2;

        let carry = 0;

        while(ptr1 || ptr2){
            let val1 = ptr1 ? ptr1.val : 0;
            let val2 = ptr2 ? ptr2.val : 0;

            let sum = val1 + val2 + carry;
            let d = sum % 10;
            carry = Math.floor(sum / 10);

            dummy.next = new ListNode(d);
            dummy = dummy.next;

            ptr1 = ptr1 ? ptr1.next : null;
            ptr2 = ptr2 ? ptr2.next : null;
        }

        if(carry > 0){
            dummy.next = new ListNode(carry);
            dummy = dummy.next;
        }

        return ans.next;
    }
}
