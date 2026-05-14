// Task 1 — Basic Function //

function welcomeUser(name) {
    console.log("Welcome " + name);
}


welcomeUser("Naveen"); // Output: Welcome Naveen

// Task 2 — Parameter + Return//

function squareNumber(num) {
    return num * num;
}


console.log(squareNumber(5)); // Output: 25

//Task 3 — Object Function//

let employee = {
    name: "Rahul",
    salary: 50000
};

function employeeBonus(bonus) {
    console.log(employee.name);
    console.log(employee.salary + bonus);
}


employeeBonus(5000);// Output: Rahul// 55000

//Task 4 — Scope Checking//

function testScope() {

    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a); // Works
        console.log(b); // Works
        console.log(c); // Works
    }

    // Outside block but inside function
    console.log(a); // Works
    console.log(b); // Error
    console.log(c); // Error
}

testScope();

//  Task 5 — Arrow Function //

const add = (a, b) => {
    console.log(a + b);
};


add(10, 20);



// Task 6 — Callback Function//

function multiply(a, b) {
    return a * b;
}

function calculator(callback, num1, num2) {
    console.log(callback(num1, num2));
}


calculator(multiply, 5, 2);

// Task 7 -Generator Function//

function* offers() {
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

let offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);


// Task - 8   Default Parameter//

function student(name, course = "JavaScript") {
    console.log("Name:", name);
    console.log("Course:", course);
}


student("Rahul");
student("Naveen", "React");



// Task 9 - Currying// 

function multi(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}


console.log(multi(2)(3)(4)); // Output: 24


// Task 10 - Spread Operator //

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray);// Output: [1, 2, 3, 4, 5, 6]

// Task 11- Object Spread //

let obj1 = {
    name: "Navi"
};

let obj2 = {
    role: "Developer"
};

let mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);// Output: { name: 'Navi', role: 'Developer' }

// Task 12 - Rest Operator//

function numbers(...num) {
    console.log(num);

    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }

    console.log(sum);
}


numbers(1, 2, 3, 4);// Output: [1, 2, 3, 4]// 10















