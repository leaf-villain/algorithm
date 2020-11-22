# Reverse Integer
# https://leetcode.com/problems/reverse-integer
class Solution:
    def reverse(self, x: int) -> int:

        # 입력받은 정수를 문자열로 변환하여 뒤집어서 다시 정수형으로 변환
        result = int(str(abs(x))[::-1])

        if x < 0:
            result *= -1

        # 제약사항 범위안에 들어오는 지 확인
        if -2 ** 31 <= result <= 2 ** 31 - 1:
            return result
        else:
            return 0
