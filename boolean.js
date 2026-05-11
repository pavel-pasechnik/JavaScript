"use strict";

//! приведення чисел і значень
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(false)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true

//! приведення рідків
// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean("false")); // true

//! при порівняння оператором && декількох значень повертається значення правого true
// console.log("hello" && 5); // 5
// console.log(5 && "hello"); // "hello"
// console.log("mango" && "poly"); // "poly"
// console.log("poly" && "mango"); // "mango"
// console.log(3 && true); // true
// console.log(true && 3); // 3

//! при порівнянні оператором && декількох значень повертається значення першого false
// console.log("hello" && 0); // 0
// console.log(0 && "hello"); // 0
// console.log(3 && false); // false
// console.log(false && 3); // false
// console.log(0 && ""); // 0
// console.log("" && 0); // ""

//! при порівнянні ператором || декількох значень повертається перше значення true або крайне праве значення false
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(5 || false); // 5
// console.log(false || 5); // 5
// console.log("hello" || 0); // "hello"
// console.log(0 || "hello"); // "hello"
// console.log(5 || 3); // 5
// console.log(3 || 5); // 3
// console.log("mango" || "poly"); // "mango"
// console.log("poly" || "mango"); // "poly"
//
// console.log(0 || false); // false
// console.log(false || 0); // 0
// console.log(null || ""); // ""
// console.log("" || null); // null

//! унарний оператор ! (ні) перетворює операнд на протилежне
// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true
// console.log(!null); // !null -> !false -> true

function canUserChat(isOnline, isBlocked) {
  if (isOnline && !isBlocked) {
    return "Can type in chat!";
  } else {
    return "Blocked from typing in chat!";
  }
}

console.log(canUserChat(true, false)); // "Can type in chat!"
console.log(canUserChat(true, true)); // "Blocked from typing in chat!"
console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
console.log(canUserChat(false, true)); // "Blocked from typing in chat!"
