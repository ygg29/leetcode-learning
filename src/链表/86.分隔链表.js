/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode-cn.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (62.48%)
 * Likes:    376
 * Dislikes: 0
 * Total Accepted:    92.6K
 * Total Submissions: 148.1K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,4,3,2,5,2], x = 3
 * 输出：[1,2,2,4,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [2,1], x = 2
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 200] 内
 * -100 
 * -200 
 * 
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  var r1 = new ListNode(0, null), r2 = new ListNode(0, null); // 虚拟头结点 r1 记录小于 x 的链表  r2 记录大于 x 的链表
  var p1=r1;
  var p2=r2; // 指向尾节点
  var p=head; // 记录头结点
  var q;

  while(p) {
    q=p.next; // 记录 next 结点
    if (p.val < x) {
      p.next = p1.next;// 指向空结点
      p1.next = p; // 链接上
      p1 = p;  // p1 指针右移
    }else{
      p.next = p2.next;
      p2.next = p;
      p2 = p;
    }
    p = q; // 原始链表右移一位
  }
  p1.next = r2.next;
  return r1.next;
};
// @lc code=end

