class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        kMap = Counter(nums)

        return [item[0] for item in kMap.most_common(k)]
