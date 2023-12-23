// Question 1
// const given_string = "usama";
// let reverse_string = ""
// for (let index = given_string.length - 1; index >= 0; index--) {
//     reverse_string += given_string[index]
// }
// console.log(reverse_string);

// Question 2
// function countVowels(inputString) {
//     const vowels = "aeiouAEIOU";
//     let vowelCount = 0;
//     for (let i = 0; i < inputString.length; i++) {
//         if (vowels.includes(inputString[i])) {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }
// const testString = "Hello, World!";
// const result = countVowels(testString);
// console.log(`Number of vowels in "${testString}": ${result}`);

// Question 3
// let sentence = "convert the first letter of each word in a sentence to uppercase"
// const array = sentence.split(" ")
// sentence = ''
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     sentence += element.charAt(0).toUpperCase() + element.slice(1) + " "
// }
// console.log(sentence);

// Q4
// const given_string = "radar";
// const reverse_string = given_string.split('').reverse().join('');

// if (given_string === reverse_string) {
//     console.log("Given string is a palindrome");
// } else {
//     console.log("Given string is not a palindrome");
// }

// Q5
// const array = [0, 5 , 6 , -1, -5, -6, 2, 4]
// let new_array = []
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element > 0){
//         new_array.push(element)
//     }
// }
// console.log("Positive numbers:", new_array);

// Q6
// const array = ["usama", "wd3","ali", "banoqabil", "wd3", "usama", "pak", 1, 2, 3]
// const find = "pak"
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (find == element) {
//         console.log("First occurance find at index:", index);
//         break
//     }
// }

// Q7
// const array = ["usama", "wd3","ali", "banoqabil", "wd3", "usama", "pak", 1, 2, 3]
// const uniqueArray = []
// for (let i = 0; i < array.length; i++) {
//     if (uniqueArray.indexOf(array[i]) === -1) {
//         uniqueArray.push(array[i]);
//     }
// }
// console.log(uniqueArray);

// Q8
// function bubbleSortAscending(array) {
//     const n = array.length;

//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 const temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }

//     return array;
// }
// function bubbleSortDescending(array) {
//     const n = array.length;

//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (array[j] < array[j + 1]) {
//                 const temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }

//     return array;
// }
// const originalArray = [5, 2, 9, 1, 5, 6];
// const ascendingSortedArray = bubbleSortAscending([...originalArray]);
// console.log("Ascending Order:", ascendingSortedArray);
// const descendingSortedArray = bubbleSortDescending([...originalArray]);
// console.log("Descending Order:", descendingSortedArray);

// Q9
// counter = 2
// while (counter <= 20 ) {
//     console.log(counter);
//     counter += 2
// }

// Q10
// function calculateFactorial(number) {
//     if (number < 0) {
//         return "Factorial is not defined for negative numbers";
//     }

//     let factorial = 1;
//     let i = 1;

//     do {
//         factorial *= i;
//         i++;
//     } while (i <= number);

//     return factorial;
// }
// const result = calculateFactorial(5);
// console.log(`The factorial of ${5} is: ${result}`);

// Q11
// const person = {
//     name: "John",
//     age: 30,
//     city: "Karachi",
//     job: "Clerk"
// };

// for (let property in person) {
//     if (person.hasOwnProperty(property)) {
//         console.log(`${property}: ${person[property]}`);
//     }
// }

// Q12
// const array = ["usama", "wd3", "ali", "banoqabil", "wd3", "usama", "pak", 1, 2, 3];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         array[i] *= 2;
//     } else if (typeof array[i] === 'string') {
//         array[i] += array[i];
//     }
// }
// console.log(array);

// Q13
// function EvenOrOdd(n) {
//     if (n % 2 == 0) {
//         console.log("Number is Even");
//     } else {
//         console.log("Number is Odd");
//     }
// }
// EvenOrOdd(8)

// Q14
// const num1 = 15;
// const num2 = 8;
// const num3 = 21;

// const max = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);

// console.log(`The maximum of ${num1}, ${num2}, and ${num3} is: ${max}`);

// Q15
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const yearToCheck = 2024;
if (isLeapYear(yearToCheck)) {
    console.log(`${yearToCheck} is a leap year.`);
} else {
    console.log(`${yearToCheck} is not a leap year.`);
}
