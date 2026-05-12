// Task1 //
console.log("10" + 5) // output: "105" becasue the number 5 is converted to as string
console.log(10 + true)// output: 11 because the boolean true is converted to number 1
console.log(false + null)// output: 0 because the boolean false is converted to number 0 and null is also converted to number 0
console.log("Hello" + undefined)// output: "Helloundefined" because the undefined is converted to string "undefined"
console.log([1,2] + 5)// output: "1,25" the array [1,2] is converted to string "1,2" and then concatenated with the number 5 which is also converted to string "5"


// task 2 //

console.log("10" + 5);
console.log(true + 5);// Boolean + Number
console.log([1,2] + "hello");//Array + String//
console.log({} + 5); // Object + Number // 
console.log(null + 5);// Null + Number //

// task 3  Convert the following into numbers //


console.log(Number("500")) // 500
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number('abc')) // NaN
console.log(Number([100])) // 100


// Task4 Check whether below values are true or false using Boolean().//
console.log(Boolean(""))// false
console.log(Boolean("javascript"))// true
console.log(Boolean(0))// false
console.log(Boolean(1))// true
console.log(Boolean(null))// false
console.log(Boolean(undefined))// false
console.log(Boolean([]))// true
console.log(Boolean({}))// true

//Task 5 Student Pass or Fail//

let mark = 45;

function checkResult(mark) {
    if (mark > 35) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

checkResult(mark);

// Task 6 voting eligibility//

let age = 18;

function checkEligibility(age) {
    if (age >= 18) {
        console.log("Eligible to vote");
    } else {
        console.log("Not eligible to vote");
    }
}

checkEligibility(age);

// Task 7 //

let a = 50;
let b = 80;
let c = 30;

if (a > b && a > c) {
    console.log("a is greatest");
} 
else if (b > a && b > c) {
    console.log("b is greatest");
} 
else {
    console.log("c is greatest");
}


// Task 8 Traffic light//

function trafficLight(color) {
    switch (color) {
        case "red":
            console.log("Stop");
            break;

        case "yellow":
            console.log("Get Ready");
            break;

        case "green":
            console.log("Go");
            break;

        default:
            console.log("Invalid Traffic Light Color");
    }
}

trafficLight("red");
trafficLight("yellow");
trafficLight("green");


// Task 9 Login system//

let username = "admin";
let password = "12345";

if (username === "admin") {
    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }
} else {
    console.log("Invalid Login");
}

// Task 10 Session Finder//

let hour = 14;

if (hour >= 1 && hour <= 12) {
    console.log("Morning");
} 
else if (hour >= 13 && hour <= 15) {
    console.log("Afternoon");
} 
else if (hour >= 16 && hour <= 19) {
    console.log("Evening");
} 
else if (hour >= 20 && hour <= 24) {
    console.log("Night");
} 
else {
    console.log("Invalid Hour");
}

// Bonus Task //

console.log(true + true) // output: 2 
console.log("5" - 2)// output: 3 because the string "5" is converted to number 5 and then subtracted by 2
console.log("5" + 2)// output: "52" because the number 2 is converted to string "2" and then concatenated with the string "5"
console.log(null + 1)// output: 1 because null is converted to number 0 and then added to 1
console.log(undefined + 1) // output: NaN because undefined is converted to NaN when used in arithmetic operations
console.log(Boolean(" "))// output: true because a string with a space is considered truthy in JavaScript
console.log(Number(true))// output: 1 because the boolean true is converted to number 1




