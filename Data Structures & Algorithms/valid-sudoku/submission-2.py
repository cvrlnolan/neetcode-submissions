class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(len(board)):
            row_values = set()
            for j in range(len(board)):
                if board[i][j] != "." and board[i][j] in row_values:
                    return False

                row_values.add(board[i][j])

        for k in range(len(board[0])):
            col_values = set()
            for l in range(len(board)):
                if board[l][k] != "." and board[l][k] in col_values:
                    return False

                col_values.add(board[l][k])

        for i in range(0, 9, 3):
            for j in range(0, 9, 3):
                box_values = set()
                for r in range(3):
                    for c in range(3):
                        val = board[r + i][c + j]
                        if val != "." and val in box_values:
                            return False
                        box_values.add(val)

        return True