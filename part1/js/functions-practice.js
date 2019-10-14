//STEP 1
function halfNumber(number) {
    return "Half of " + number + " is " + number / 2 + ".";
}

//STEP 2
function squareNumber(number) {
    return "The result of squaring the number " + number + " is " + number*number + ".";
}

//STEP 3
function percentOf(number1, number2) {
    return number1 + " is " + (number1 * 100) / number2 + " % of " + number2;
}

//STEP 4
function findModulus(number1, number2) {
    return number1 % number2 + " is the modulus of " + number1 + " and " + number2;
}

//STEP 5
function findSum(numbers) {
    var i, sum=0;
    for(i=0;i<numbers.length;i++) {
        sum = sum + parseInt(numbers[i]);
    }
    return "The sum of all numbers is : " + sum;
}

function main() {
    var choice, number, number1, number2, numberArray;
    while(choice !== 6) {
        choice = parseInt(window.prompt("Menu:\n1: Half a Number\n2: Square a Number\n3: Percent of a Number\n4: Modulus of Numbers\n5: Find sum of numbers\n6: Exit"));
        if(choice === 1) {
            number = window.prompt("Enter a number");
            window.alert(halfNumber(number));
        }
        else if(choice === 2) {
            number = window.prompt("Enter a number");
            window.alert(squareNumber(number));
        }
        else if(choice === 3) {
            number1 = window.prompt("Enter first number");
            number2 = window.prompt("Enter second number");
            window.alert(percentOf(number1, number2));
        }
        else if(choice === 4) {
            number1 = window.prompt("Enter first number");
            number2 = window.prompt("Enter second number");
            window.alert(findModulus(number1, number2));
        }
        else if(choice === 5) {
            number = window.prompt("Enter numbers separated by commas");
            numberArray = number.split(",");
            window.alert(findSum(numberArray));
        }
        else if(choice === 6){
            break;
        }
    }
}

main();