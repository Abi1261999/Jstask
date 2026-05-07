var a = 10;
a = 15;
console.log(a) // Here the output will be 15 because it has been reassigned..

let b = 20;
let b = 30;// Inn this case we will get an error becasue we cannot variable twice using with let keyword.

const c=50;
console.log(c) // Here the output will be 50 because it is a constant variable and we cannot reassign it.   


const x = 10;
x = 20;// Here we will get an error because we cannot reassign a constant variable.

var p = 5;
var p = 10;
console.log(p); // Here the output will be 10 because we can reassign a variable declared with var keyword.

let q = 25;
q = q + 10;
console.log(q); // Here the output will be 35 because we can reassign a variable declared with let keyword and we are adding 10 to the existing value of q.

const r = 7;
console.log(r + 3); // Here the output will be 10 because we are adding 3 to the constant variable r which has a value of 7.

let a = 10; // we can declare a variable with let keyword and assign a value to it.


/// Section 2///

/// 9. console.log() is used to print
/// 10. console.error() is used to print error messages
/// 11. console.warn() is used to print warning messages
/// 12. console.clear() clears the browser console output.

/// section 3///

let a = "hello";
console.log(typeof a); // Here the output will be "string" because the variable a is assigned a string value.

let b = 100;
console.log(typeof b); // output is "number"

let c = false;
console.log(typeof c); // output is "boolean"

let d;
console.log(d);// output is undefined varibale is declared but value is not assigned.


// Convert string to number


let num = Number("25");

console.log(num); // 25

/// Section 4///

let fruit=["apple","banana","orange"];
console.log(fruit); // output is ["apple","banana","orange"]

let arr = ["a","b","c"];
console.log(arr[1]);// output is 'b' as the index start from 0.

let arr = ["x","y","z"];
console.log(arr[arr.length-1]); // In this case Z will be removed from the arrray and the remainig will be "x","y".

//How to get first element?

console.log(arr[0]); // output is "x" as the index start from 0.

let arr = ["apple","banana"];
console.log(arr.length); // output is 2 .

// Adding element in the array

arr.push("orange");

console.log(arr);

/// section 5///

let student ={
    name:"John",
    age:20,
}
console.log(student);// output is {name: "John", age: 20}

let obj = {name:"Naveen"};
console.log(obj.name);// Output is "naveen" because we are accessing the name property.

let obj = {
  fruits: ["apple","banana"]
};
console.log(obj.fruits[1]);// Output is "banana".

// 28. we can access the last element of a array by using arr.length-1.


/// Section 6///

console.log(5 + 3); // output is 8
console.log(10 % 3); // output is 1
console.log(2 ** 3); // output is 8.
console.log(10 / 2); // output is 5.

/// Section 7///

let a = 5;
a++;
console.log(a);// Output is 6 we are using post increment operator.

let b = 5;
let c = b++;
console.log(b, c); // Output is 6, 5 because we are using post increment operator and the value of b is incremented after it is assigned to c.

let x = 5;
let y = ++x;
console.log(x, y); // Output is 6, 6 because we are using pre increment operator and the value of x is incremented before it is assigned to y.

let m = 3;
let n = m--;
console.log(m, n);// Output is 2, 3 because we are using post decrement operator and the value of m is decremented after it is assigned to n.

/// Section 8///

console.log(5 == "5"); // output is true.
console.log(5 === "5"); // output is false in this case both are check data type and value.
console.log(true && false || true); // output is true.

/// Section 9///

5 > 3 ? console.log("Yes") : console.log("No");// Output is "Yes" because the condition is true.











