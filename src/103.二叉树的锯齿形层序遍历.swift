/*
 * @lc app=leetcode.cn id=103 lang=swift
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {

/// 设计思想， 递归过程中，额外记录一个值： 当前节点是第几层
    func privateOrder(_ root: TreeNode?, arr: inout [[Int]], k: Int) {
        guard let root = root else {return}
        if arr.count - 1 < k {
            arr.append([])
        }
         arr[k].append(root.val)
         privateOrder(root.left, arr: &arr, k: k+1)
         privateOrder(root.right, arr: &arr, k: k+1)
    }


    func zigzagLevelOrder(_ root: TreeNode?) -> [[Int]] {
        var resArr = [[Int]]()
        privateOrder(root, arr: &resArr, k: 0)
        for i in 0..<resArr.count {
            if i % 2 != 0 {
                resArr[i].reverse()
            }
        }
        return resArr
    }
}
// @lc code=end

