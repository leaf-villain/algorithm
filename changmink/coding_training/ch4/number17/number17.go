package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

/*
	17. 혈중 알코올 농도 계산기
	제약 조건 : 숫자 값에 숫자가 입력 되도록 보장
*/

func main() {
	const bacValue = 0.08
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("How much your weight?")
	w, err := getNumber(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Print("What is your sex?")
	sex, err := getString(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Print("How many drink?")
	a, err := getNumber(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Print("How long after drinking?")
	h, err := getNumber(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	var r float64
	if sex == "M" || sex == "man" {
		r = 0.73
	} else if sex == "W" || sex == "woman" {
		r = 0.6
	}

	bac := (float64(a) * 5.14 / float64(w) * r) - 0.015*float64(h)
	fmt.Printf("Your BAC is %0.2f\n", bac)
	var legal string
	if bacValue > bac {
		legal = "not legal"
	} else {
		legal = "legal"
	}

	fmt.Printf("It is %s for you to drive.\n", legal)
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
