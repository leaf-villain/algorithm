package main

import (
	"bufio"
	"fmt"
	"os"
)

/*
	24. 에너그램 점검
	제약 조건 : isAnagram 함수정의 true, false 반환
*/
func main() {
	scanner := bufio.NewScanner(os.Stdin)
	fmt.Print("Enter the first string: ")
	scanner.Scan()
	str1 := scanner.Text()

	fmt.Print("Enter the second string: ")
	scanner.Scan()
	str2 := scanner.Text()
	fmt.Println(isAnagram(str1, str2))
}
func isAnagram(str1 string, str2 string) bool {
	if len(str1) != len(str2) {
		return false
	}

	tail := len(str1) - 1
	head := 0
	for head < tail {
		if str1[head] != str2[tail] {
			return false
		}
		head++
		tail--
	}

	return true
}
