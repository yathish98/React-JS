//function 'sumAll' that uses a rest parameter to take any number of arguments and returns their sum
function sumAll(...a){
    let b=0;
	for(let i=0;i<a.length;i++){
		b+=a[i];
	}
    return b;
}

let arr1 = [1,2,3,4,5];
let x = sumAll(...arr1);
console.log(x); //returns 15

let arr2 = [-1,0,1];
let y = sumAll(...arr2);
console.log(y); //returns 0