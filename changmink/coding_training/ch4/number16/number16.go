package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

/*
	16. 합법적으로 운전 가능한 연령
	제약 조건 : 한개의 출력문만 사용하기, 3항연산자(없으면 if/else) - go는 3항 연산자가 없다.
*/

func main() {
	const driveAge = 16
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("What is your age?")
	age, err := getNumber(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	var enough string
	if age < driveAge {
		enough = "not old enough"
	} else {
		enough = "old enough"
	}

	fmt.Printf("You are %s to legally drive", enough)
}
func getString(reader *bufio.Reader) (string, error) {
	str, err := reader.ReadString('\n')
	if err != nil {
		return "", err
	}

	return strings.Replace(str, "\n", "", -1), nil
}
func getNumber(reader *bufio.Reader) (int, error) {
	numberString, err := getString(reader)
	if err != nil {
		return -1, err
	}

	number, err := strconv.Atoi(numberString)
	if err != nil {
		return -1, err
	}

	return number, nil
}
