/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 *
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/description/
 *
 * algorithms
 * Medium (60.37%)
 * Likes:    519
 * Dislikes: 0
 * Total Accepted:    64.2K
 * Total Submissions: 106.3K
 * Testcase Example:  '[[7,null],[13,0],[11,4],[10,2],[1,0]]'
 *
 * 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。
 * 
 * 构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random
 * 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。
 * 
 * 例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random
 * --> y 。
 * 
 * 返回复制链表的头节点。
 * 
 * 用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：
 * 
 * 
 * val：一个表示 Node.val 的整数。
 * random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
 * 
 * 
 * 你的代码 只 接受原链表的头节点 head 作为传入参数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：head = [[1,1],[2,1]]
 * 输出：[[1,1],[2,1]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 
 * 
 * 输入：head = [[3,null],[3,0],[3,null]]
 * 输出：[[3,null],[3,0],[3,null]]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 解释：给定的链表为空（空指针），因此返回 null。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10000 
 * Node.random 为空（null）或指向链表中的节点。
 * 
 * 
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
/**
 * 算法难点： random 指针域的复制
 * 1. 将链表的节点两两复制， 如原链表 1->2->3  =>  1->1->2->2->3->3
 * 2. 将 random 指针域复指向复制出来的节点（即原节点的 next）
 * 3. 将复制出来的节点独立出来
 */
var copyRandomList = function(head) {
  if (!head){return null;}
  // 1. 
  var p = head;
  var q; // 复制出来的节点
  while(p) {
    q = new Node(p.val, p.next, p.random);
    q.next = p.next;  
    p.next = q;
    p = q.next;
  }
  // 2.
  p = head.next;
  while(p) {
    if (p.random){
      p.random = p.random.next; // 将 q 指针指向复制出来的节点
    }
      (p = p.next) && (p = p.next)

  }
  // 3.
  let newHead = head.next;
  p = head;
  while(p) {
    q = p.next;
    p.next = q.next;
    if (p.next) {
      q.next = p.next.next; 
    }
    p = p.next;
    // q = q.next;
  }
  return newHead;  
};
// @lc code=end

