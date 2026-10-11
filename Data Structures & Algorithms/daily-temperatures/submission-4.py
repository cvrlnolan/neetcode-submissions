class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        result = [0] * len(temperatures)
        stack = []  # (temp, index)

        for i, temp in enumerate(temperatures):
            while len(stack) > 0 and temp > stack[-1][0]:
                _temp = stack.pop()
                result[_temp[1]] = i - _temp[1]

            stack.append((temp, i))

        return result
