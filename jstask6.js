//Task  1. Student Attendance System


// Step 1: Create arrays
let presentStudents = ["Alice", "Bob", "Charlie"];
let absentStudents = ["David", "Emma"];

// Step 2: Merge arrays using spread operator
let allStudents = [...presentStudents, ...absentStudents];

// Step 3: Add one new student at last
allStudents.push("Frank");

// Step 4: Print final array
console.log("Final Student List:", allStudents);


// Task 2 E-Commerce Cart

// Step 1: Create mobile object
let mobile = {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 70000
};

// Step 2: Create charger object
let charger = {
    type: "Fast Charger",
    watt: "45W"
};

// Step 3: Merge both objects using spread operator
let productDetails = {
    ...mobile,
    ...charger
};

// Step 4: Add deliveryDate property
productDetails.deliveryDate = "20-May-2026";

// Step 5: Print final object
console.log(productDetails);



// Task 3. Food Delivery App //


// Step 1: Create function using rest operator
function orderFood(...items) {

    // Step 2: Print total items
    console.log("Total items ordered:", items.length);

    // Step 3: Print first item
    console.log("First item:", items[0]);

    // Step 4: Print last item
    console.log("Last item:", items[items.length - 1]);
}

// Function call
orderFood("Pizza", "Burger", "Pasta", "Fries");


// Task 4  Employee Salary Filter//

// Step 1: Create array of employee objects
let employees = [
    { name: "Rahul", salary: 45000 },
    { name: "Sneha", salary: 60000 },
    { name: "Arjun", salary: 75000 },
    { name: "Priya", salary: 50000 }
];

// Step 2: Filter employees with salary above 50000
let filteredEmployees = employees.filter(employee => employee.salary > 50000);

// Step 3: Print filtered employees
console.log(filteredEmployees);



// Task 5 —  Online Game Score Board //

// Step 1: Create array of scores
let scores = [50, 80, 70, 90, 60];

// Step 2: Use reduce() to find total score
let totalScore = scores.reduce((total, score) => {
    return total + score;
}, 0);

// Step 3: Print final total
console.log("Total Score:", totalScore);


