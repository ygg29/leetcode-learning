/*
 * @lc app=leetcode.cn id=110 lang=swift
 *
 * [110] 平衡二叉树
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
    // 改写改函数功能，直接可以判断当前树是否平衡，不平衡则返回负数
   func getDeep(_ root: TreeNode?) -> Int {
        guard let root = root else { return 0}
        let ld = getDeep(root.left)
        let rd = getDeep(root.right)
        if ld < 0 || rd < 0 { return -1 }
        if abs(ld-rd)>1 { return -1 }
        return max(ld,rd)+1
    }

    func isBalanced(_ root: TreeNode?) -> Bool {
       return getDeep(root) >= 0
    }
/** 版本 1
    func getDeep(_ root: TreeNode?) -> Int {
        guard let root = root else { return 0}
        let ld = getDeep(root.left)
        let rd = getDeep(root.right)
        return max(ld,rd)+1
    }

    func isBalanced(_ root: TreeNode?) -> Bool {
        guard let root = root else { return true }
        let isL = isBalanced(root.left)
        let isR = isBalanced(root.right)
        if !isL || !isR { return false }
        let ld = getDeep(root.left)
        let rd = getDeep(root.right)
        return abs(ld-rd) <= 1
    }
    */
}
// @lc code=end

