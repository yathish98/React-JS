//creation of mathOperations.js to export all the basic mathematical operations using named exports
export function Add(a,b){
    return a+b;
}

export function Subtract(a,b){
    return a-b;
}

export function Multiply(a,b){
    return a*b;
}

export function Divide(a,b){
    return a/b;
}

//creating a default export
export default function Square(a){
    return a*a;
}