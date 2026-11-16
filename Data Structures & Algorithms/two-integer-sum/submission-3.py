class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        diffMap = {}

        for i, num in enumerate(nums):
            if diffMap.get(num) is not None:
                return [diffMap.get(num, 0), i]

            diff = target - num
            diffMap[diff] = i

        return []
