"use string";

//! .toUpperCase() верхній регістр
// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

//! .toLowerCase() нижній регічтр
// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message); // "Welcome to Bahamas!"

//! .slice(startIndex, endIndex) не включае останній
//! Cимвол endIndex не обовʼязковий для витягування символів до кінця рядка
//! .slice() без аргументів створює точну копію рядка
// const fullName = "Jacob Mercer";
// console.log(fullName.slice(0, 4)); // 'Jaco'
// console.log(fullName.slice(3, 9)); // 'ob Mer'
// console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'
// console.log(fullName.slice(1)); // 'acob Mercer'
// console.log(fullName.slice(3)); // 'ob Mercer'
// console.log(fullName.slice()); // 'Jacob Mercer'

//! .includes(substring) включае підрядок в рядку.
//! Чутливий до регістру.
// const username = 'Jacob Mercer';
// console.log(username.includes('Jacob')); // true
// console.log(username.includes('John')); // false
// console.log(username.includes('Mercer')); // true
// console.log(username.includes('Doe')); // false
// console.log(username.includes('jacob')); // false
// console.log(username.includes('mercer')); // false

let message = "Please buy our stuff!";
const hasSpam = message.includes("buy");

if (hasSpam) {
  console.log("Warning: This message contains forbidden words.");
} else {
  console.log("You can safely open this message.");
}

//! .startsWith(substring) підрядок починається з.
//! Чутливий до регістру
// const str = "Hello, world!";
// console.log(str.startsWith("Hello")); // true
// console.log(str.startsWith("hello")); // false (метод чутливий до регістру)

//! .endsWith(substr) підрядок закінчується на
//! Чутливий до регістру
// const str = "Hello, world!";
// console.log(str.endsWith("world!")); // true
// console.log(str.endsWith("World!")); // false (метод чутливий до регістру)

//! .indexOf(substr) перше входження підрядка в рядок
//! Якщо підрядок не знайдено, метод .indexOf() поверне -1
//! Число в аргументах автоматично перетворюється на рядок
// const message = "Welcome to Bahamas1!";
// const index = message.indexOf("to");
// console.log(index); // 8
// const index = message.indexOf("hello");
// console.log(index); // -1
// const index = message.indexOf(1);
// console.log(index); // 18

//! .trim() видаляє початкові і кінцеві пробіли в рядку
//! Метод trim() не змінює вихідний рядок, а повертає новий рядок без початкових і кінцевих пробілів.
// const input = " JavaScript is awesome!    ";
// const trimmedInput = input.trim();
// console.log(trimmedInput); // "JavaScript is awesome!"
// console.log(input); // " JavaScript is awesome!    "

function transformString(string) {
  //! .split() розділяє строку завказанним символом
  const words = string.split("_");
  //! .join() обєднує строку з вказаннним розділовим символом
  return words.join("-");
}

transformString("user_age"); // "user-age"
transformString("price_per_droid"); // "price-per-droid"

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
