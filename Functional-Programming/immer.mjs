import { produce } from "immer"
// converted this file to .mjs to stop error detection 

let book = { title: "Failure is not a break" };

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}

let update = publish(book);

console.log(book);
console.log(update);