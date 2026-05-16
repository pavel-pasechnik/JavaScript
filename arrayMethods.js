"use strict";

//! метод приєднання join() дозволяє об'єднати елементи масиву в рядок.
//! елементи будуть розділені символом або групою символів, зазначених у дужках
// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'

//! split() дозволяє перетворити рядок на масив, розбивши його за вказаним роздільником
// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]

//! slice(beginIndex, endIndex) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його.
//! Копія створюється від індексу beginIndex до, але не включаючи індекс endIndex.
//! Якщо не вказати параметри beginIndex і endIndex, буде створено повну копію вихідного масиву
//! Якщо не вказати endIndex, копіювання відбуватиметься від beginIndex до кінця масиву
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

//! concat(element) використовується для об'єднання двох або більше масивів.
//! створює і повертає новий масив, що містить усі елементи об'єднаних масивів.
//! Порядок аргументів методу визначає порядок розташування елементів у новому масиві.
// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(firstArray); // ["Mercury", "Venus"];
// console.log(secondArray); // ["Mars", "Jupiter"];
// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

//! indexOf(element) використовується для визначення індексу першого входження елемента у масиві.
//! Він повертає індекс елемента, якщо він знайдений, або -1, якщо елемент не знайдений.
//! виконує сувору рівність (===) при порівнянні елементів.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

//! push(element) використовується для додавання одного або більше елементів у кінець масиву.
// const planets = ["Earth", "Mars", "Venus"];

// planets.push("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

//! includes(element) використовується для перевірки наявності певного елемента в масиві.
// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false
