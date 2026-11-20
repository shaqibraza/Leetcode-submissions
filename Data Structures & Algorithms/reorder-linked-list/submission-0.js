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
     * @return {void}
     */
    reorderList(head) {
    if(!head || !head.next) return;

    // 1. Find middle
    let slow = head;
    let fast = head;

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse second half
    let second = slow.next;
    slow.next = null;

    let prev = null;
    while(second){
        let next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }

    // 3. Merge
    let first = head;

    while(prev){
        let t1 = first.next;
        let t2 = prev.next;

        first.next = prev;
        prev.next = t1;

        first = t1;
        prev = t2;
    }
};
}
