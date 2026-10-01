class Solution:
    def isValid(self, s: str) -> bool:
        parentheses_stack = []
        for i in range(len(s)):
            if s[i] in ["(", "{", "["]:
                parentheses_stack.append(s[i])

            elif len(parentheses_stack) == 0:
                return False

            elif s[i] == ")" and not parentheses_stack.pop() == "(":
                return False

            elif s[i] == "}" and not parentheses_stack.pop() == "{":
                return False

            elif s[i] == "]" and not parentheses_stack.pop() == "[":
                return False

        return len(parentheses_stack) == 0
