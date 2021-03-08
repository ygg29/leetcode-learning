/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (68.08%)
 * Likes:    899
 * Dislikes: 0
 * Total Accepted:    211.9K
 * Total Submissions: 309.5K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代实现
// var reverseList = function(head) {
//   if (!head || !head.next) {return head;}
//   var pre = null;
//   var curr = head;
//   var next = head.next;
//   while(curr) {
//     curr.next = pre;
//     pre = curr;
//     (curr = next) && (next = next.next);
//   }
//   return pre;
// };
// 递归实现
var reverseList = function(head) {
  if (!head || !head.next) {return head;}
  var newList = reverseList(head.next);
  var newHead = head.next; // 获取翻转后 list 头结点
  newHead.next = head; // 真正翻转
  head.next = null; // 重要
  return newList;
};
// @lc code=end

