"use strict";

function App(x, y, z) {
  console.log("Сума:");

  return x + y + z;
}

const Sum = App(2, 4, 8);

console.log(Sum);

function makeMessage(name, price) {
  return `You picked ${name}, price per item is ${price} credits`;
}

makeMessage("apple", 10);
