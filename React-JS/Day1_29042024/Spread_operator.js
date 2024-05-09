//1
let array1 = [1,2,3,4,5];
let array2 = [0,2,4,6,8];
let combinedArray = [...array1,...array2]; //combining the elements of array1 and array2 using the spread operator
console.log(combinedArray); //returns [1,2,3,4,5,0,2,4,6,8]

let combinedArray2 = [-1,...array1,10,...array2,-2]; //adding new element in the beginning, middle and end
console.log(combinedArray2); //returns [-1,1,2,3,4,5,10,0,2,4,6,8,-2]

/********************************************************************************/

//2
let object1 = {name:'Yathish',age:25};
let object2 = {name:'Kumar',city:'Bengaluru',state:'KA'};
let combinedObject = {...object1,...object2}; //merging object1 and object2 using spread operator
console.log(combinedObject); //returns {name: 'Kumar', age: 25, city: 'Bengaluru', state: 'KA'}

let combinedObject2 = {...combinedObject,locality:'Chandapura'}; //adding new property to combinedObject
console.log(combinedObject2); //returns {name: 'Kumar', age: 25, city: 'Bengaluru', state: 'KA', locality: 'Chandapura'}

/*******************************************************************************/

//3
function sum(a,b,c){
    return a+b+c;
} //creating a function to calculate the sum of three numbers

const numbers = [1,3,5]; //creating an array containing three numbers
let x = sum(...numbers); //calculating the sum of the numbers in the array by using the spread operator to fetch the elements
console.log(x); //returns 9

/******************************************************************************/