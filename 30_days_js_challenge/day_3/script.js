// +++++++++++++++++++++++ Activity 1 ++++++++++++++++++++++

// task 1

//  let i  = 0;
// if(i > 0){
//     console.log("postive");
// }else if(i < 0){
//     console.log("negative");
// }else{
//     console.log("zero");
// };

// task 2
// let age = 20;
// if(age > 18){
//     console.log("Eligiable");
// }else{
//     console.log("not Eligiable");
// };








// +++++++++++++++++++++++++ Activity 2 +++++++++++++++++++++++

// task 3
// let a = 2, b = 3, c = 5;
// if(a>b){
//     if(a>c){
//         console.log(a + " is the greatest.");
//     }else{
//         console.log(c + " is the greates.");
//     };
// }else{
//     if(b>c){
//         console.log(b + " is the greates.");
//     }else{
//         console.log(c + " is the greatest.");
//     };
// };







// ++++++++++++++++++++ Activity 3 ++++++++++++++++++++

// task 4

// let week = 4;
// switch(week){
//     case 1: console.log("Monday");
//         break;
    
//     case 2: console.log("Tuseday");
//         break;

//     case 3: console.log("Wednesday");
//         break;

//     case 4: console.log("Thursday");
//         break;

//     case 5: console.log("Friday");
//         break;

//     case 6: console.log("Saturday");
//         break;

//     case 7: console.log("Sunday");
//         break;

//     default: console.log("Enter a default value: ");
// };

// task 5

// let i = 76;
// let mark = i/10;
// let marks = Math.floor(mark);
// switch(marks){
//     case 9: console.log("A");
//         break;

//     case 8: console.log("B");
//         break;

//     case 7: console.log("C");
//         break;

//     case 6: console.log("D");
//         break;
    
//     case 5:
//     case 4:
//     case 3:
//     case 2:
//     case 1: console.log("F");
//         break;

//     default: console.log("Enter a default value: ");

// }









// ++++++++++++++++++++ Activity 4 ++++++++++++++++++++++

// task 6

// let i = 3;
// let test = (i%2 == 0) ? "even": "odd";
// console.log(test);








// ++++++++++++++++ Activity 5 +++++++++++++++++++++++++

// task 7

let year = 2004;
if((year%4 == 0 && year%100 != 0) || (year%400 == 0)){
    console.log("Leap Year");
}else{
    console.log("Not a lear year");
}