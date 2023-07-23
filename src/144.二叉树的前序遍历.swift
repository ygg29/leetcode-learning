/*
 * @lc app=leetcode.cn id=144 lang=swift
 *
 * [144] 二叉树的前序遍历
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

    
    func preorder(_ root: TreeNode?, arr: inout [Int]) {
        guard let root = root else { return }
        arr.append(root.val)
        preorder(root.left,arr: &arr)
        preorder(root.right,arr: &arr)
    }

    func preorderTraversal(_ root: TreeNode?) -> [Int] {
        guard let root = root else {return []}
        var arr = [Int]()
        preorder(root, arr: &arr)
        return arr
    }
}
// @lc code=end

