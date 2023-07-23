/*
 * @lc app=leetcode.cn id=222 lang=swift
 *
 * [222] 完全二叉树的节点个数
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
/**
        完全二叉树的高度可以直接通过不断地访问左子树就可以获取
        判断左右子树的高度: 
        如果相等说明左子树是满二叉树, 然后进一步判断右子树的节点数(最后一层最后出现的节点必然在右子树中)
        如果不等说明右子树是深度小于左子树的满二叉树, 然后进一步判断左子树的节点数(最后一层最后出现的节点必然在左子树中)
        **/

    func getDepth(_ root: TreeNode?) -> Int {
        var ro: TreeNode? = root
        var d = 0
        while(ro != nil) {
            d+=1
            ro = ro?.left
        }
        return d
    }

    func countNodes(_ root: TreeNode?) -> Int {
       guard let root = root else { return 0}
       let ld = getDepth(root.left)
       let rd = getDepth(root.right)
       if ld == rd {
            return Int(1<<ld) + countNodes(root.right) // 1(根节点) + (1 << ld)-1(左完全左子树节点数) + 右子树节点数量
       } else {
            return Int(1<<rd) + countNodes(root.left) // 1(根节点) + (1 << rd)-1(右完全右子树节点数) + 左子树节点数量
       }
    }




/// 为利用二叉树性质
    // func privateOrder(_ root: TreeNode?, arr: inout [Int]) {
    //     guard let root = root else { return }
    //     arr.append(root.val)
    //     privateOrder(root.left, arr: &arr)
    //     privateOrder(root.right, arr: &arr)
    // }

    // func countNodes(_ root: TreeNode?) -> Int {
    //     var arr = [Int]()
    //     privateOrder(root, arr: &arr)
    //     return arr.count
    // }
}
// @lc code=end

