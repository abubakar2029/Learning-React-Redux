const Person = {
    name: "AbuBakar",
    address: {
        country: "Pakistan",
        city: "Lyallpur"
    }
};

const updated = { ...Person, name: "Umer" };
console.log(Person);// name property will be overwrite
updated.address.city = "Faisalabad";
console.log(Person.address.city); // Faisalabad => city name is changed
console.log("--------------");
console.log(updated); // Faisalabad => city name is changed
// * bcz address was copied by reference 

/* SOLUTION */
const updated1 = {
    ...Person,
    address: { // here duplication will not happen but overwrite by property name
        ...Person.address,
    },
    name: "Umer"
};
console.log("---------------");
console.log(updated1); // Faisalabad => city name is changed