/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (41.17%)
 * Likes:    1258
 * Dislikes: 0
 * Total Accepted:    334.2K
 * Total Submissions: 811.5K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 进阶：你能尝试使用一趟扫描实现吗？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中结点的数目为 sz
 * 1 
 * 0 
 * 1 
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
 * @param {number} n
 * @return {ListNode}
 */
// 算法思想： 双指针， 一个指针先走 n 步， 然后两个指针同时出发。 需要借助虚拟头结点
var removeNthFromEnd = function(head, n) {
  var ret = new ListNode(0, head); // 虚拟头， 方便处理边界情况
  var q = head; 
  var p = ret; 
  while(n--) q = q.next; // q 指针先向后走 n 步
  while(q) p = p.next, q = q.next;  // p、q一起移动
  p.next = p.next.next; // 删除 p.next
  return ret.next; // 返回头结点

};
// @lc code=end

