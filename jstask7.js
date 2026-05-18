//  Task 1- API Task - User Names Uppercase

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {

    // Convert usernames to UPPERCASE
    let upperCaseUsers = users.map((user) => {
      return user.username.toUpperCase();
    });

    // Print new array
    console.log(upperCaseUsers);

  })
  .catch((error) => {
    console.log("Error:", error);
  });


  // API Task 2  - Expensive Products

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {

    // Filter products with price greater than 100
    let expensiveProducts = products.filter((product) => {
      return product.price > 100;
    });

    // Print filtered products
    console.log(expensiveProducts);

  })
  .catch((error) => {
    console.log("Error:", error);
  });



// Date Concept Task 3 - Digital Clock

// Create Date object
let currentTime = new Date();

// Get hours, minutes, seconds
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

// Print time
console.log(hours + " : " + minutes + " : " + seconds);


// String Concept Task 4 - Username Checker

// Create string
let username = "   Naveen Kumar   ";

// Remove spaces
let trimmedName = username.trim();

// Convert to uppercase
let upperName = trimmedName.toUpperCase();

// Check includes "KUMAR"
let checkName = upperName.includes("KUMAR");

// Print outputs
console.log("Final Name:", upperName);
console.log("Contains KUMAR:", checkName);


// Array Concept Task 5 - Student Rank System

// Create array
let marks = [450, 300, 700, 200, 900];

// Sort marks from high to low
marks.sort((a, b) => b - a);

// Get top 3 marks
let topMarks = marks.slice(0, 3);

// Print results
console.log("Sorted Marks:", marks);
console.log("Top 3 Marks:", topMarks);

