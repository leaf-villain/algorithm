package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

/*
	15. 암호 검증
	제약 조건 : if/else문 사용, 암호는 대소문자 구별
*/

func main() {
	const password = "abc$123"
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("What is your password?")
	passwordInput, err := getString(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	if password == passwordInput {
		fmt.Println("Welcome!")
	} else {
		fmt.Println("The password is incorrect")
	}
}

func getString(reader *bufio.Reader) (string, error) {
	str, err := reader.ReadString('\n')
	if err != nil {
		return "", err
	}

	return strings.Replace(str, "\n", "", -1), nil
}
