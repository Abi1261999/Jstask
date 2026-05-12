// Task1  Printing in loop//
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Tak2 printing odd number //
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// Task 3 Multiplication table of 7//

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// Task 4 Reverse counting //

let i = 20;

while (i >= 1) {
    console.log(i);
    i--;
}


// Task 5 Sum of numbers//

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Total Sum =", sum);

// Task 6 Array Loop//

let fruits = ["apple", "banana", "orange", "grapes"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Task 7 count even number//

let count = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

console.log("Total Even Numbers =", count);


// Task 8 Star Pattern//

for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}

// Task 9 simple function//

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();

// Task 10 Function with parameters//

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");

// Task 11 Adding two number//

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// Task 12 Salary Bonus//

function calculateSalary(salary, bonus) {
    return salary + bonus;
}

let salary = 50000;
let bonus = 5000;

console.log(calculateSalary(salary, bonus));


// Task 13 //

let student = {
    name: "Rahul",
    course: "JavaScript",
    marks: 95
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}

// Task 14 largest number//

function largest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(largest(10, 50));

// Task 15 Mini Employee task//

let employee = {
    name: "Rahul",
    department: "IT",
    salary: 50000
};

function calculateBonus(emp, bonus) {
    let finalSalary = emp.salary + bonus;

    console.log("Employee Name: " + emp.name);
    console.log("Department: " + emp.department);
    console.log("Salary: " + emp.salary);
    console.log("Salary after bonus: " + finalSalary);
}

calculateBonus(employee, 5000);

