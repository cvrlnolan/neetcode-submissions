class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        diffMap = {}

        for i in range(len(nums)):
            num = nums[i]
            if diffMap.get(num) is not None:
                return [diffMap.get(num), i]
            else:
                diff = target - nums[i]
                diffMap[diff] = i

        return []