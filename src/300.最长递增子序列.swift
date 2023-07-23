/*
 * @lc app=leetcode.cn id=300 lang=swift
 *
 * [300] 最长递增子序列
 */

// @lc code=start
class Solution {

/// 使用栈记录 nums 数组中从小到大的递增子数组，
/// 1、nums[0]入栈
/// 2、遍历，如果第 i 项大于 nums[0]， 则入栈，若小于，则遍历栈中元素，替换指定位置的元素（只替换，不改变栈中元素个数）
/// 3、遍历结束栈的长度为答案
/// 注：该方法得到的栈中元素是错误的，但是长度是正确的
    func lengthOfLIS(_ nums: [Int]) -> Int {
        if nums.count <= 1 { return nums.count }
        var stack = [nums[0]]
        for idx in 1..<nums.count {
            let p = nums[idx]
            if stack.last! < p {
                stack.append(p)
            }
             else {
                for i in 0..<stack.count {
                    if stack[i] >= p {
                        stack[i] = p
                        break
                    }
                }
            }
           
        }
        return stack.count

    }

    /**
    func lengthOfLIS(_ nums: [Int]) -> Int {
        var arr = Array.init(repeating: 1, count: nums.count)
        for (idx, item) in nums.enumerated() {
            var pivot = nums[idx]
            for i in idx+1..<nums.count {
                if nums[i] > pivot {
                    arr[idx]+=1
                    pivot = nums[i]
                }
            }
        }
        return arr.max()!
    }
    */
}
// @lc code=end

