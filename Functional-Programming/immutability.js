let name1 = "AbuBakar";

let newName = name1.toUpperCase();
console.log(`Original string is same: ${name1}`);
console.log("-----------------");
console.log(`New String: ${newName}`);

/* In contrast if we have an object */
let book = {};
book.title = "...";
console.log(`Book Object: ${book.title}`);

const book1 = {};
book1.title = "...";
console.log(`Book1 Object: ${book1.title}`);// const just prevents reassigning

/* 
* So in javaScript Arrays and Objects are mutable
In pure functional programming language this would be different
*/
// if (onj1 === obj2) react-redux