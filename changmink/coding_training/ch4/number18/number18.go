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

	fmt.Print("Your choice: ")
	choice, err := getString(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Print("Enter the temperature: ")
	temperature, err := getNumber(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	var temper int
	if strings.ToLower(choice) == "c" {
		temper = (temperature * 9 / 5) + 32
	} else {
		temper = (temperature - 32) * 5 / 9
	}
	fmt.Printf("%d\n", temper)
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

	return strconv.Atoi(numberString)
}
