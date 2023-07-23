/*
 * @lc app=leetcode.cn id=53 lang=swift
 *
 * [53] 最大子数组和
 */

// @lc code=start
class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        if nums.count == 1 {return nums.first!}
        var resArr = nums
        for i in 1...resArr.count - 1 {
            resArr[i] = resArr[i] + max(resArr[i-1], 0)
        }
        return resArr.max() ?? 0
    }
}
// @lc code=end

