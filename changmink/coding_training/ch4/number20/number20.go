package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	const taxRateWI = 0.055
	const taxRateIL = 0.08
	const taxRateEauClaire = 0.005
	const taxRateDunn = 0.004

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
	var countyTax float64 = 0
	if state == "WI" {
		tax = amountF * taxRateWI
		tax = float64(int64(tax*20+0.5)) / 20.0

		fmt.Print("What is the county?")
		county, err := getString(reader)
		if err != nil {
			fmt.Println(err)
			return
		}

		if county == "Eau Claire" {
			countyTax = amountF * taxRateEauClaire
		}
		if county == "Dunn" {
			countyTax = amountF * taxRateDunn
		}
	}

	if state == "LI" {
		tax = amountF * taxRateIL
		tax = float64(int64(tax*20+0.5)) / 20.0
	}

	total := amountF + tax + countyTax

	outputString := fmt.Sprintf("The total is $%0.2f", total)
	if tax != 0 {
		var builder strings.Builder
		builder.WriteString(fmt.Sprintf("The subtotal is $%0.2f\n", amountF))
		builder.WriteString(fmt.Sprintf("The state tax is $%0.2f\n", tax))
		if countyTax > 0 {
			builder.WriteString(fmt.Sprintf("The county tax is $%0.2f\n", countyTax))
		}
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
