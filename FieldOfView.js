"use strict";

const globalVar = "Global";

console.log(globalVar); // Доступ до globalVar з глобальної області видимості
// Немає доступу до aVar, bVar і cVar

if (true) {
  const aVar = "A";
  console.log(globalVar); // Доступ до globalVariable з блоку A
  console.log(aVar); // Доступ до aVar з блоку A
  // Немає доступу до bVar і cVar

  if (true) {
    const bVar = "B";
    console.log(globalVar); // Доступ до globalVariable з блоку B
    console.log(aVar); // Доступ до aVar з блоку B
    console.log(bVar); // Доступ до bVar з блоку B
    // Немає доступу до cVar
  }
}

console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar

if (true) {
  const cVar = "C";
  console.log(globalVar); // Доступ до globalVar з блоку C
  console.log(cVar); // Доступ до cVar з блоку C
  // Немає доступу до aVar і bVar
}

console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar
