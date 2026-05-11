"use strict";

let price = 0;
const subscription = "pro";

if (subscription === "pro") {
  price = 100;
}

console.log(price); // 100

// Одна умова в функції
function getPrice(subscription) {
  let price = 0;

  if (subscription === "pro") {
    price = 100;
  }

  return price;
}

console.log(getPrice("free")); // 0
console.log(getPrice("pro")); // 100

// якщо не виконується умова
function checkGrade(grade) {
  if (grade >= 70) {
    return "Satisfactory";
  } else {
    return "Unsatisfactory";
  }
}

console.log(checkGrade(40)); // Unsatisfactory
console.log(checkGrade(75)); // Satisfactory

// тернарний оператор
let grade = 40;
const credit = grade >= 70 ? "Satisfactory" : "Unsatisfactory";
console.log(credit);

// декілька умов
grade = 85;

if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}
