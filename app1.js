// let score = 80
// let result = score >= 80 ? "Pass" : "Fail";
// console.log(result);

// function calculateAverage(numbers) {
//     let sum = numbers.reduce((acc, num) => acc + num, 0);
//     return sum / numbers.length;
// }
// console.log(calculateAverage([1,2,3,4,5]))

// let student = {
//     name: "John",
//     age: 20,
//     grades: [90, 85, 88],
//     calculateAverage: function () {
//         let sum = this.grades.reduce((acc, grade) => acc + grade, 0);
//         return sum / this.grades.length;
//     }
// };
// console.log(student);

// let numbers = [1, 2, 3, 4, 5];
// for (let number of numbers) {
//     console.log(number % 2 === 0 ? "Even" : "Odd");
// }

// const income = 50000;
// function calculateTax(income) {
//     return income <= 50000 ? income * 0.1 : income * 0.2;
// }
// console.log("Tax is", calculateTax(income));

let car = {
    make: "Toyota",
    model: "Camry",
    startEngine: function () {
        console.log("Engine started!");
    }
};

car.startEngine();
