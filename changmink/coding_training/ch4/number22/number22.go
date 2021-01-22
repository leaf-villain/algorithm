package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("Enter the first number: ")
	first, err := getNumber(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Print("Enter the second number: ")
	second, err := getNumber(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Print("Enter the third number: ")
	third, err := getNumber(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	if first == second || second == third || third == first {
		return
	}
	var largest int
	if first > second && first > third {
		largest = first
	} else if second > first && second > third {
		largest = second
	} else {
		largest = third
	}

	fmt.Printf("The largest number is %d\n", largest)
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
