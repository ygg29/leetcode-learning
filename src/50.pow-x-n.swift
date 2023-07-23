/*
 * @lc app=leetcode.cn id=50 lang=swift
 *
 * [50] Pow(x, n)
 */

// @lc code=start
class Solution {


    /// 将 n 一二分法分割， 每次获取 res 的平方
    func myPow(_ x: Double, _ n: Int) -> Double {
        var res: Double = 1 //
        var i = n
        var y = x
        while (i != 0) {
            
            if i % 2 != 0 {
                res *= y
            }
            y *= y
            i = i / 2
        }

        return n < 0 ? 1/res : res

    }

/** 超时， n 过大时爆栈
    func myPow(_ x: Double, _ n: Int) -> Double {
        if n == 0 {return 1}
        if n > 0 {
            return myPow(x, n-1) * x
        } else {
            return 1/(myPow(x, -n-1)*x)
        }
    }
    */
}
// @lc code=end

