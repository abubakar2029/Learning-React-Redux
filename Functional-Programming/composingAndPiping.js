import { compose, pipe } from "loadash/fp"

let input = "Javascript        ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => "<div>" + str + "</div>";
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input))); // to clean this code we use compose or pipe

const transform = compose(wrapInDiv, toLowerCase, trim);
transform(input); // so compose here is a higher order function

pipe(trim, toLowerCase, wrapInDiv); //**left-to-right