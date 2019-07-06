//
// Object Destructuring
//
// const person = {
//   name: "Andrew",
//   age: 41,
//   location: {
//     city: "Philly",
//     temp: 92
//   }
// };

// // console.log(`${person.name} is ${person.age} old.`);

// // const name = person.name;
// // const age = person.age;

// // console.log(`${name} is ${age} old.`);

// const { name, age } = person;
// console.log(`${name} is ${age} old.`);

// if (person.location.city && person.location.temp) {
//   console.log(`Its ${person.location.temp} in ${person.location.city}`);
// }

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`Its ${temperature} in ${city}`);
// }
//
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self" } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = ["1299 s juniper street", "Philadelphia", "PA", "19147"];
const [street, city, state, zip] = address;
console.log(street);

const item = ["coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [itemtoSell, , mediumSize] = item;
console.log(`A medium ${itemtoSell} costs ${mediumSize}. `);
