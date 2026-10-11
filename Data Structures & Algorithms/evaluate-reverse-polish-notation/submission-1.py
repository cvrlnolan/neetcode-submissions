class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        values = []

        for _, tok in enumerate(tokens):
            if tok in "+-*/":
                b = values.pop()
                a = values.pop()
                if tok == "+":
                    sum = a + b
                    values.append(sum)
                elif tok == "-":
                    diff = a - b
                    values.append(diff)
                elif tok == "*":
                    product = a * b
                    values.append(product)
                else:
                    quotient = math.trunc(a / b)
                    values.append(quotient)
            else:
                values.append(int(tok))

        return values.pop()