// Sample array
const fruits = ["Apple", "Banana", "Cherry"];

// Sample object
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {street: "1st Cross", city:"Bengaluru"}
};

//1
let [f1,f2,f3] = fruits;
console.log(f1); //returns Apple
console.log(f3); //returns Cherry

/******************************************/

//2
let {firstName,lastName,age,email} = user;
console.log(firstName); //returns John
console.log(lastName); //returns Doe
console.log(email); //returns john.doe@example.com

/******************************************/

//3
console.log(user.address.street); //returns 1st Cross
console.log(user.address.city); //returns Bengaluru

/******************************************/

//4
function dest(user){
    return user.firstName + user.email;
}
let funRet = dest(user);
console.log(funRet); //returns John john.doe@example.com

/******************************************/