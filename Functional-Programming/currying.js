import { compose, pipe } from "loadash/fp"

let input = "Javascript        ";

const trim = str => str.trim();
const wrapInDiv = str => "<div>" + str + "</div>";
const wrapInSpan = str => "<span>" + str + "</span>";
/* Instead of these 2 we can use */
const wrap = (type, str) => `<${type}> + ${str} + </${type}>`;
const wrap1 = type => str => `<${type}> + ${str} + </${type}>`;
const toLowerCase = str => str.toLowerCase();

const transform = compose(wrap, toLowerCase, trim);
// so compose here is a higher order function
console.log(transform(input));
// undefined
/* Piping cannot be used in this scenerio */

/* BY-CURRYING */
const transform1 = compose(wrap("div"), toLowerCase, trim);
transform1(input);
// <div>Javascript</div>

/* SIMPLE-EXAMPLE */
function add(a) {
    return function (b) {
        return a + b;
    }
}
/* Or in arrow Function */
const add1 = a => b => a + b;