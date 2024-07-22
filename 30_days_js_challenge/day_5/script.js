// +++++++++++++++++++++++ Activity 1 +++++++++++++++++++++++++
// function declaration
// task 1

// function evenOddFunction(i) {
//     if(i % 2 === 0){
//         console.log("Even number");
//     }else{
//         console.log("Odd number");
//     }
// }

// evenOddFunction(3);

// task 2

// function square(i){
//     return i * i;
// }

// console.log(square(2));








// ++++++++++++++++++++++++++ Activity 2 ++++++++++++++++++++
// function expression
// task 3

// const greates = function(a,b){
//     if(a > b){
//         return a;
//     }else{
//         return b;
//     }
// }
// console.log(greates(7,5))

// task 4

// const concate = function(cha, ter){
//     return cha + ter;
// }
// console.log(concate("red"," pearl"));











// +++++++++++++++++++++++++++ Activity 3 ++++++++++++++++++++++++
// Arrow function

// task 5

// const add = (a,b) => {
//     return a + b;
// }
// console.log(add(3,5))

// task 6

// const check = (i) => {
//     if(i.includes('a')){
//         return 1;
//     }else{
//         return 0;
//     }
// }
// console.log(check("red pearl"))










// ++++++++++++++++++++++++++ Activity 4 +++++++++++++++++++++++++

// task 7

// const product = (a, b = 5) => {
//     return a * b;
// }
// console.log(product(5))

// task 8

// const greet = (userName, age = 18) => {
//     // let userName = prompt("enter your name: ");
//     return "hello " + userName + ". Your age is " + age;
// }
// console.log(greet("red"))// actually this is not the real output desired

// const greet = () => {
//     let userName = prompt("Enter your name: ");
//     let age = prompt("Enter your age (optional, press Enter to skip): ");
//     age = age ? parseInt(age) : 18; // Convert age to integer, default to 18 if not provided

//     return "Hello " + userName + ", you are " + age + " years old.";
// }

// // Example usage:
// console.log(greet());


// function greet(name, age = 18){
//     if(typeof name !== 'string' || typeof age !== 'number'){
//         return "Invalid input, Please enter a valid input"
//     }else{
//         return `Hello ${name} you are ${age} years old.`;
//     }
// }
// let name = "Red";
// let age = 18;
// let message = greet(name,age);
// console.log(message);





// ++++++++++++++++++++++++++ Activity 5 ++++++++++++++++++++++++++

// task 9 
function times(number, text){
    for(let i = 0; i < number; i++){
        console.log(text);
    }
}
let number = 5;
let text = "hello";
times(number,text);




function callFunctionXTimes(func, time){
    for(let j = 0; j <= time; j++){
        func(j);
    }
}
let sayHello = (itreation) => {
    console.log(`hello! this is call number ${itreation}.`);
}
callFunctionXTimes(sayHello, 4);

// task 10

