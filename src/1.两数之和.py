#
# @lc app=leetcode.cn id=1 lang=python3
#
# [1] 两数之和
#

# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for idx, item1 in enumerate(nums):
            for idx2, item2 in enumerate(nums[idx+1:]):
                if item1 + item2 == target:
                    return [idx, idx2+idx+1]
                
# @lc code=end
