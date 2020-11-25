// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// "생소한 언어"

// package main
package problem

// play.golang.go 에서 설치 없이 실행해보려면 아래 메인 함수를 주석 해제합니다.
// (패키지 이름도 변경해야 함)
//
// import (
// 	"fmt"
// )
// func main() {
//  // array literal
// 	// https://www.codingnuri.com/golang-book/6.html
// 	nums := []int{1, 1, 2, 2, 3}
// 	last := removeDuplicates(nums)
//
//  // print array
// 	// https://mingrammer.com/gobyexample/slices/
// 	// https://stackoverflow.com/a/24489454/4394750
// 	fmt.Printf("result: %v\n", nums[0:last])
// }

func removeDuplicates(nums []int) int {
	// len(arr)
	// https://tour.golang.org/moretypes/11
	if len(nums) == 0 {
		return 0
	}

	// for i, v := range arr {}
	// https://mingrammer.com/gobyexample/collection-functions/
	// https://www.joinc.co.kr/w/GoLang/example/range
	lastIdx := 0
	lastVal := nums[0]
	for _, v := range nums {
		if v > lastVal {
			lastIdx += 1
			nums[lastIdx] = v
			lastVal = v
		}
	}

	return lastIdx + 1
}
