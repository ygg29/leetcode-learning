/*
 * @lc app=leetcode.cn id=226 lang=swift
 *
 * [226] 翻转二叉树
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
    func invertTree(_ root: TreeNode?) -> TreeNode? {
        guard let root = root else {return root}
        // if root.left == nil && root.right != nil {
        //     root.left = root.right
        //     root.right = nil
        // }else if root.right == nil && root.left != nil {
        //     root.right = root.left
        //     root.left = nil
        // } else {
            let temp = root.left
            root.left = root.right
            root.right = temp
        // }
        // swap(&root.left!, &root.right!)

        invertTree(root.left)
        invertTree(root.right)
        return root
    }
}
// @lc code=end

