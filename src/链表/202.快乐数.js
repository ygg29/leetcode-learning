/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 *
 * https://leetcode-cn.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (61.28%)
 * Likes:    542
 * Dislikes: 0
 * Total Accepted:    123.6K
 * Total Submissions: 201.9K
 * Testcase Example:  '19'
 *
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 
 * 「快乐数」定义为：
 * 
 * 
 * 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 * 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 * 如果 可以变为  1，那么这个数就是快乐数。
 * 
 * 
 * 如果 n 是快乐数就返回 true ；不是，则返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：19
 * 输出：true
 * 解释：
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 2
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var getNext = function(num) {
    // var nums = [];
    // while (num > 0) {
    //   nums.push(num % 10);
    //   num = parseInt(num / 10);
    //   console.log(num);
    // }
    // return res = nums.reduce((prev, curr) => {
    //   return prev + curr*curr;
    // }, 0);
    var res = 0;
    while (num>0) {
      res += (num%10) * (num%10);
      num = parseInt(num/10);
    }
    return res;
  }

  
  // if (!n || !head.next) {return false;}
    let slow = getNext(n);
    let fast = getNext(getNext(n));
    while(slow != fast && fast!=1 && fast.next!=1) {
      slow = getNext(slow);
      fast = getNext(getNext(fast));
    }
    return fast == 1;
};


// @lc code=end

