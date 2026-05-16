"use strict";

const planets = ["Earth", "Mars", "Venus"]; // масив рядків
const numbers = [1, 2, 3, 4, 5]; // масив чисел

// доступ до елемента масиву
console.log(planets[0]); // 'Earth'
console.log(planets[3]); // undefined

//! перевизначенння елементу масиву
planets[2] = "Neptune";
console.log(planets); // ['Earth', 'Mars', 'Neptune']

//! Властивість довжини масиву
console.log(planets.length); // 3

if (planets.length >= 3) {
  console.log("3 or more elements");
} else {
  console.log("less than 3 elements");
}
// останній інддекс масиву
const lastElementIndex = planets.length - 1;
console.log(planets[lastElementIndex]); // 'Neptune'

//! всі змінні зі значеннями масивів посилаються на вихідний масив
const a = ["Mango", "Poly"];
const b = a;
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"]

a[1] = "Jacob";
console.log(a); // ["Mango", "Jacob"]
console.log(b); // ["Mango", "Jacob"]

b[0] = "Ajax";
console.log(a); // ["Ajax", "Jacob"]
console.log(b); // ["Ajax", "Jacob"]

//! Два масиви ніколи не рівні навіть з однаковими значеннями елементів
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2); // false
console.log([] === []); // false

//! Масив → Рядок
// const array = [1, true, "Poly"];
// console.log(String(array)); // "1,true,Poly"
// console.log(array + "5"); // "1,true,Poly5"

//! Масив → Число
// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN

//! Масив → Логічне значення (буль)
//! При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.
// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true
