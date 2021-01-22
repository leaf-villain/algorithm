package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Is the car slient when you turn the key?")
	answer, err := getString(reader)
	if err != nil {
		fmt.Println(err)
		return
	}

	if answer == "y" {
		fmt.print("Are the battery terminals corroded?")
		answer, err = getString(reader)
		if err != nil {
			fmt.Println(err)
			return
		}
		if answer == "y" {
			fmt.Println("Clean the termainal. And retry.")
		} else if answer == "n" {
			fmt.Println("Replace cable and try again.")
		} else {
			fmt.Println("y or n answer plz.")
			return
		}
	} else if answer == "n" {
		fmt.print("Is sound of click in the car?")
		answer, err = getString(reader)
		if err != nil {
			fmt.Println(err)
			return
		}
		if answer == "y" {
			fmt.Println("Change battery. And retry.")
		} else if answer == "n" {
			fmt.print("Cannot start up complete?")
			answer, err = getString(reader)
			if err != nil {
				fmt.Println(err)
				return
			}

			if answer == "y" {
				fmt.Println("Check the spark plug.")
			} else if answer == "n" {
				fmt.print("Is engine off soon after working?")
				answer, err = getString(reader)
				if err != nil {
					fmt.Println(err)
					return
				}
				if answer == "y" {
					fmt.print("Have fuel injection in the car?")
					answer, err = getString(reader)
					if err != nil {
						fmt.Println(err)
						return
					}
					if answer == "y" {
						fmt.Println("Check the chock on and off.")
					} else if answer == "n" {
						fmt.Println("Request to service center.")
					} else {
						fmt.Println("y or n answer plz.")
						return
					}
				} else if answer == "n" {
					fmt.Println("Request to service center."
				} else {
					fmt.Println("y or n answer plz.")
					return
				}
			} else {
				fmt.Println("y or n answer plz.")
				return
			}
		} else {
			fmt.Println("y or n answer plz.")
			return
		}
	} else {
		fmt.Println("y or n answer plz.")
		return
	}

}
func getString(reader *bufio.Reader) (string, error) {
	str, err := reader.ReadString('\n')
	if err != nil {
		return "", err
	}

	return strings.Replace(str, "\n", "", -1), nil
}
