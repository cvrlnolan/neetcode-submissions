class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        seen = set()

        for _, num in enumerate(nums):
            if num in seen:
                return True
            
            seen.add(num)
        
        return False
        