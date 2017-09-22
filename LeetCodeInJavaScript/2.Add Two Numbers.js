/*
 * @Author: mingru 
 * @Date: 2017-09-22 17:05:08 
 * @Last Modified by:   mingru 
 * @Last Modified time: 2017-09-22 17:05:08 
 */



// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8


 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var addTwoNumbers = function(l1, l2) {
    var ans = new ListNode(0);
    var curNode = ans,
        newNode;
    var sum = 0,
        carry = 0,
        newVal = 0;
    var p1 = l1, p2 = l2;
	while (p1 !== null || p2 !== null) {
		var x = p1 === null ? 0 : p1.val;
		var y = p2 === null ? 0 : p2.val;		
        sum = x + y +carry;
        carry = Math.floor(sum / 10);
        newVal = sum % 10;
        newNode = new ListNode(newVal);
        curNode.next = newNode;
        curNode = curNode.next;
        p1 = p1 === null ? null : p1.next;
        p2 = p2 === null ? null : p2.next;        
    };
    if (carry > 0) {
        newNode = new ListNode(1);
        curNode.next = newNode;
    };
    
    return ans.next;
};

// simple testcase;
var p1 = new ListNode(2);
var l1 = p1;
l1.next = new ListNode(4);
l1 = l1.next;
l1.next = new ListNode(3);

var p2 = new ListNode(5);
var l2 = p2;
l2.next = new ListNode(6);
l2 = l2.next;
l2.next = new ListNode(4);

var ans = addTwoNumbers(p1,p2);
console.log(ans);