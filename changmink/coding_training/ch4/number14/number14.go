package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

/*
	14. 세금 계산기
	제약 조건 : if 문만 사용하기, 모든 금액은 가장 가까운 센트로 반올림, 프로그램의 마지막에 한개의 출력문만 사용하여 결과를 출력할 것
*/

func main() {
	const taxRate = 0.055
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("What is the order amount?")
	amount, err := getNumber(reader)
	if err != nil {
		fmt.Println(err)
		return
	}
	amountF := float64(amount)

	fmt.Print("What is the state?")
	state, err := getString(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	var tax float64 = 0
	if state == "WI" {
		tax = amountF * taxRate
		tax = float64(int64(tax*20+0.5)) / 20.0
	}
	total := tax + amountF

	outputString := fmt.Sprintf("The total is $%0.2f", total)
	if tax != 0 {
		var builder strings.Builder
		builder.WriteString(fmt.Sprintf("The subtotal is $%0.2f\n", amountF))
		builder.WriteString(fmt.Sprintf("The tax is $%0.2f\n", tax))
		builder.WriteString(outputString)
		outputString = builder.String()
	}
	fmt.Println(outputString)
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

func getString(reader *bufio.Reader) (string, error) {
	str, err := reader.ReadString('\n')
	if err != nil {
		return "", err
	}

	return strings.Replace(str, "\n", "", -1), nil
}
