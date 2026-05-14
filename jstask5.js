//Task 1 — Student Registration Form//

// Ask user details
let studentName = prompt("Enter your name:");
let department = prompt("Enter your department:");
const age = prompt("Enter your age:");

// Print details
console.log(`Welcome ${studentName}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);// output: Welcome Naveen// Department: Computer Science// Age: 21

// Task 2 — ATM Withdrawal System //


let balance = 10000;


let amount = Number(prompt("Enter withdrawal amount:"));

if (amount >= 100 && amount <= balance) {
    console.log("Transaction Successful");
    console.log("Remaining Balance:", balance - amount);
} else {
    console.log("Insufficient Balance or Minimum withdrawal is 100");

} 

// Task 3 — Swiggy Discount Checker //


let orderAmount = Number(prompt("Enter order amount:"));


let result = orderAmount > 499
    ? "Free Delivery Available"
    : "Delivery Charges Applied";


console.log(result);


// Task 4 — Instagram Login System //


let correctUsername = "admin";
let correctPassword = "1234";


let username = prompt("Enter username:");


if (username === correctUsername) {

    let password = prompt("Enter password:");

    if (password === correctPassword) {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }

} else {
    console.log("Invalid Username");
}

// Task 5 — Traffic Signal System //


let signal = prompt("Enter signal color:");

switch (signal) {
    case "red":
        console.log("STOP");
        break;

    case "yellow":
        console.log("READY");
        break;

    case "green":
        console.log("GO");
        break;

    default:
        console.log("Invalid Signal");
}

//Task 6 — Employee Salary Calculator//


function salaryCalculation(basicSalary, bonus) {
    let totalSalary = basicSalary + bonus;
    return totalSalary;
}


let result = salaryCalculation(25000, 5000);


console.log(result);

// Task 7 — E-Commerce Cart Total //


let prices = [100, 200, 300, 400];

let total = 0;


for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}


let average = total / prices.length;


console.log("Total Price:", total);
console.log("Average Price:", average);


// Task 8 — WhatsApp Contact Book //


let user = {
    name: "Rahul",
    phone: "9876543210",
    status: "Active"
};


for (let key in user) {
    console.log(key + " : " + user[key]);
} // output: name : Rahul// phone : 9876543210// status : Active

// Task 9 — Movie Ticket Booking// 


function payment() {
    console.log("Payment Successful");
}


function bookTicket(callback) {
    console.log("Ticket Booking Completed");

   
    callback();
}


bookTicket(payment); // Output: Ticket Booking Completed// Payment Successful

// Task 10 — Food Delivery Time Tracker //


function* orderStatus() {
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}


let order = orderStatus();

// Show stages one by one
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value); // output: Order Confirmed// Preparing Food// Out for Delivery// Delivered













