/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (52.45%)
 * Likes:    704
 * Dislikes: 0
 * Total Accepted:    108.4K
 * Total Submissions: 206.6K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

  // 返回翻转后的链表的头结点
  var reverseN = function(head, n) {
    if (n == 1) {return head;}
    var newList = reverseN(head.next, n-1); // 转换完成的链表
    var tail = head.next;  // 翻过过后的链表尾结点(也是未翻转链表的尾节点， 细评)
    head.next = tail.next; // 将链表的尾节点记录下来， 递归赋值给翻转后链表的尾节点
    tail.next = head;  // 指针翻转
    return newList;
  }
  let hair = new ListNode(-1, head);
  var p = hair;
  let cnt = right-left+1;
  while(--left){
    p = p.next; //移动到需要翻转区间的起点
  }
  p.next = reverseN(p.next, cnt); // 将 p 的 next 指向新链表的头结点
  return vir.next;

};
// @lc code=end

