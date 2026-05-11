"use strict";

// Код у суворому режимі

console.log("Hello, world");
//! операнди let та const
let age = null;
const birthday = new Date(1987, 10, 22);
const username = "Mango";
const today = new Date();

age = today.getFullYear() - birthday.getFullYear();

// інтерполяція ${} у шаблонному рядку ` `
let totalYears = `${username}, birthday: ${birthday.getDate()}.${birthday.getMonth() + 1}.${birthday.getFullYear()}, age: ${age}`;

console.log(totalYears);
// тип
console.log(`age is ${typeof age}`);

// let age = 25;
// age += 1;
// console.log(age); // 26

// конкатенація
// console.log(1 + 2 + "4"); // "34"

// перетворення на стрічку
age = String(age);
// визначення типу
console.log(`age is ${typeof age}`);

//! довжина - властивість .length
console.log(`довжина стрічки age: ${age.length}`);

//відбір символу рядка
console.log(`перший символ віку: ${age[0]}`);
console.log(`Останій символ стрічки: ${totalYears[totalYears.length - 1]}`);

// строге прирівняння за типами
console.log(`вік не є числом - ${age !== Number}`);

//! неявне перетворення типів при всіх операціях крім додавання
console.log(`вік > 30 ${age > 30}`);

// перетворення стрічки на число
age = Number(age);
console.log(`age is ${typeof age}`);

//! перетворення першого входження числа в стрічці на число Number.parseInt() Number.parseFloat()
console.log(`Загальний вік має число ${Number.parseInt(age)}`);

// арифметичні функції
// console.log(Math.floor(1.3)); // 1
// console.log(Math.floor(1.7)); // 1
// console.log(Math.ceil(1.3)); // 2
// console.log(Math.ceil(1.7)); // 2
// console.log(Math.round(1.3)); // 1
// console.log(Math.round(1.7)); // 2
// console.log(Math.max(20, 10, 50, 40)); // 50
// console.log(Math.min(20, 10, 50, 40)); // 10
// console.log(Math.random()); // випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294

//! проблема
// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004
//? вихід
// console.log(0.1 * 10 + 0.2 * 10); // 3
// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3
//* рішення
// console.log((0.1 + 0.2).toFixed(1)); // "0.3"
// console.log((5).toFixed(2));  //  ”5.00”
// console.log((8.762195).toFixed(4));  //  “8.7622”
