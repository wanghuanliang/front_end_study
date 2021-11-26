/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function(head, x) {
    let small = new ListNode(0);
    let smallHead = small;
    let large = new ListNode(0);
    let largeHead = large;
    while(head !== null){
        if(head.val < x){
            small.next = head;
            small = small.next
        } else {
            large.next = head;
            large = large.next;
        }
        head = head.next;
    }
    small.next = largeHead.next;
    large.next = null;
    return smallHead.next;
};

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

let head=[1,4,3,2,5,2],x=3;
console.log(partition(head,x));