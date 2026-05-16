"use string";

let count = 0;

while (count < 3) {
  console.log(`Count: ${count}`);
  count += 1;
}

//! цей цикл виконається один раз незалежно від умов виконання
count = 0;

do {
  console.log(`Count: ${count}`);
  count += 1;
} while (count < 5);

//! лічильник до заданної кількості числа
function sumUpTo(number) {
  let sum = 0;

  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }

  return sum;
}

console.log(sumUpTo(5)); // 15
console.log(sumUpTo(10)); // 55
console.log(sumUpTo(0)); // 0

//! преривання циклу по заданній умові
for (let i = 0; i < 10; i += 1) {
  console.log(i);

  if (i === 5) {
    console.log("Met the number 5, interrupt the execution of the cycle");
    break;
  }
}

console.log("Log after cycle");

//! перебирання масиву і виведення кожного елемента окремо
const planet = ["Earth", "Mars", "Venus"];

for (const plan of planet) {
  console.log(plan);
}
