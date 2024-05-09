import React, { useState } from "react"; //importing React package and useState hook

//creating NumberState functional component
function NumberState(){
    //using 'useState' hook to initialize a state variable called `number` with a starting value of `0`.
    let[number,setNumber] = useState(0);

    //function to increment the counter. Gets called when clicked on Increment button
    function increment(){
        setNumber(number+1);
        console(number);
    }

    //function to decrement the counter. Gets called when clicked on Decrement button
    function decrement(){
        setNumber(number-1);
        console(number);
    }

    //function to reset the counter. Gets called when clicked on Reset button
    function reset(){
        setNumber(0);
        console(number);
    }

    return (
        <div>
            <h1>{number}</h1> {/*Displays the current number*/}
            <button onClick={increment}>Increment</button> {/*button to increment the counter*/}
            <button onClick={decrement}>Decrement</button> {/*button to decrement the counter*/}
            <button onClick={reset}>Reset</button> {/*button to reset the number back to zero*/}
        </div>
    );

}

export default NumberState;