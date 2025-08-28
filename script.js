// 🎯 Part 1: Mastering JavaScript Basics
// Variables, conditionals, and user input
function checkAge() {
  let age = document.getElementById("userAge").value;
  let result = "";

  if (age >= 18) {
    result = "You are an adult ✅";
  } else if (age > 0) {
    result = "You are a minor 🚸";
  } else {
    result = "Please enter a valid age.";
  }

  document.getElementById("ageResult").innerText = result;
}

// ❤️ Part 2: Functions — Reusable logic
// Function 1: Calculate total of two numbers
function calculateTotal(a, b) {
  return a + b;
}

function showTotal() {
  let num1 = parseFloat(document.getElementById("num1").value) || 0;
  let num2 = parseFloat(document.getElementById("num2").value) || 0;
  let total = calculateTotal(num1, num2);
  document.getElementById("totalResult").innerText = "Total = " + total;
}

// Function 2: Format a string (for demonstration)
function formatString(str) {
  return str.toUpperCase() + "!!!";
}
console.log(formatString("hello world")); // Example usage

// 🔁 Part 3: Loops — Iteration
// Example 1: Countdown using a for loop
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear previous content

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.innerText = "Countdown: " + i;
    list.appendChild(li);
  }
}

// Example 2: Loop through an array of fruits
function listFruits() {
  let fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange", "🍇 Grapes"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // Clear previous

  fruits.forEach((fruit) => {
    let li = document.createElement("li");
    li.innerText = fruit;
    list.appendChild(li);
  });
}

// 🌐 Part 4: DOM Manipulation
// 1. Toggle highlight class
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// 2. Dynamically add items to a list
document.getElementById("addItemBtn").addEventListener("click", () => {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.innerText = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});

// 3. Listen for user input (example logging in console)
document.getElementById("userAge").addEventListener("input", (e) => {
  console.log("User typed age:", e.target.value);
});
