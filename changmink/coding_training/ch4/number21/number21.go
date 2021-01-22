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
	fmt.Print("Please enter the number of the month: ")
	month, err := getNumber(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	var monthString string
	switch month {
	case 1:
		monthString = "January"
	case 2:
		monthString = "Fabnuary"
	case 3:
		monthString = "March"
	case 4:
		monthString = "April"
	case 5:
		monthString = "May"
	case 6:
		monthString = "June"
	case 7:
		monthString = "July"
	case 8:
		monthString = "August"
	case 9:
		monthString = "September"
	case 10:
		monthString = "October"
	case 11:
		monthString = "November"
	case 12:
		monthString = "December"
	default:
		monthString = "Over the Range!"
	}
	fmt.Printf("The name of the month is %s\n", monthString)
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
