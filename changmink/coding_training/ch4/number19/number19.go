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

	fmt.Print("height?")
	h, err := getNumber(reader)
	for err != nil {
		fmt.Println(err)
		h, err = getNumber(reader)
	}

	fmt.Print("weight?")
	w, err := getNumber(reader)
	for err != nil {
		fmt.Println(err)
		w, err = getNumber(reader)
	}

	wF := float64(w)
	hF := float64(h)

	bmi := (wF / (hF * hF)) * 703.0

	fmt.Printf("Your BMI is %0.2f\n", bmi)
	if bmi > 25 {
		fmt.Println("You are overweight. You should see your doctor")
	} else if bmi < 18.5 {
		fmt.Println("You are ligthweight. You should see your doctor")
	} else {
		fmt.Println("You are within the ideal weight range")
	}

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
