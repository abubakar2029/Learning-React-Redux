// Functions are first class citizens
// they can be treated as any other objects
function sayHello() {
    console.log("Hello");
}

const fn = sayHello;
fn(); // now fn is an alias to sayHello function 
