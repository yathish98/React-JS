//importing the named exports from mathOperations.js
//Task1
import {Add} from './mathOperations.js';
import {Multiply} from './mathOperations.js';

let p = Add(10,5); //returns 15
let q = Multiply(4,3); //returns 12

console.log(p);
console.log(q);

/******************************************************/

//Task2
//importing default export
import Square from './mathOperations.js';

let x = Square(9); //returns 81

console.log(x);

/*****************************************************/