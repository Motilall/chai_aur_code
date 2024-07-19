// +++++++++++++++++++++ Activity 1 +++++++++++++++++++++

// task 1
// let arr = [1,2,3,4,5];

// task 2
// console.log(arr[0]);// access the first element
// console.log(arr[arr.length - 1]); // access the last element






// ++++++++++++++++ Activity 2 +++++++++++++++++++

// task 3

// arr.push(6) // this is add an element at last in the end of the array
// console.log(arr)

// task 4
// arr.pop() // this will remove the last element from the array
// console.log(arr)

// task 5
// arr.shift() // it will remove an element from the starting of the array
// console.log(arr)

// task 6
// arr.unshift(1); // this will add an element from the starting of the array
// console.log(arr)












// +++++++++++++++++++ Activity 3 ++++++++++++++++++

// task 7
// let square = arr.map(function(arr){
//     return arr * arr;
// });
// console.log(square);

// alternative arrow function
// let square = arr.map(arr => arr * arr);
// console.log(square)

// task 8

// let evenNum = arr.filter(function(arr){
//     return arr % 2 == 0;
// });
// console.log(evenNum);

// alternative arrow function

// let evenNum = arr.filter( arr => arr % 2 === 0);
// console.log(evenNum)

// task 9
// let sum = arr.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
// })
// console.log(sum);

// let fruits = ["apple", "orange", "banana", "watermelon", "coconut"];
// let juice = fruits.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);
// console.log(juice);







// ++++++++++++++++++ Activity 4 +++++++++++++++++++++++

// task 10
let arr = [10, 20, 30, 40, 50];
// for(let i = 0; i < arr.length; i++){
//     let currentElement = arr[i];
//     console.log(currentElement);
// };

// task 11

// printNumber = arr.forEach(function(printNumber){
//     console.log(printNumber);
// })
// printNumber = arr.forEach(printNumber => console.log(printNumber));










// +++++++++++++++++++++++++ Activity 5 ++++++++++++++++++++++++

// task 12
let matrix = [
    [1, 2],
    [3,4],
    [5,6]
];
console.log(matrix)

// taks 13
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j]);
    };
};