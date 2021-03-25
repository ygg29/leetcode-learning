/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (54.50%)
 * Likes:    892
 * Dislikes: 0
 * Total Accepted:    188.6K
 * Total Submissions: 346.3K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是
 * -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。
 * 
 * 说明：不允许修改给定的链表。
 * 
 * 进阶：
 * 
 * 
 * 你是否可以使用 O(1) 空间解决此题？
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：返回索引为 1 的链表节点
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：返回索引为 0 的链表节点
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 
 * 
 * 输入：head = [1], pos = -1
 * 输出：返回 null
 * 解释：链表中没有环。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目范围在范围 [0, 10^4] 内
 * -10^5 
 * pos 的值为 -1 或者链表中的一个有效索引
 * 
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
/** 
 * 1. 设 slowPtr 走到环起点的时候为 a
 * 2. 此时 fastPtr 走的距离为  2a， 则从起点到 fastPtr 的距离为 a
 * 3. 设此时 fastPtr 到环起点（即到 slowPtr ）的距离为 x 
 * 4. 若 fastPtr 想和 slowPtr 相遇（即追上 slowPtr），则此时 fastPtr 需要走 x 步（slowPtr 距离环起点 x）
 * 5. fastPtr 与 slowPtr 的相遇位置距离循环结束到环起点 a(正好是 slow 到环起点的距离)
 * 6. 此时将 fast 重新放回起点，然后 slow 与 fast 同时一次一步走， 下次相遇位置即为环起点
*/
var detectCycle = function(head) {
  if (head == null || head.next == null) {return null;}
  let slowPtr = fastPtr = head;
  do {
    if (fastPtr == null || fastPtr.next == null) {return null;}
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  } while (slowPtr != fastPtr);
  fastPtr = head;
  while(slowPtr != fastPtr) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next;
  }
  return slowPtr;
};
// @lc code=end

