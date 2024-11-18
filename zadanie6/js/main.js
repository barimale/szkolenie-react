const people = [
  { name: "John", age: 25, hobbies: ["reading", "sports"] },
  { name: "Anna", age: 32, hobbies: ["cooking", "dancing"] },
  { name: "Mike", age: 20, hobbies: ["gaming", "cycling"] }
];

const [john, anna, mike] = people;

const { nameJohn, ageJohn } = john;
const { nameAnna, ageAnna } = anna;
const { nameMike, ageMike } = john;

const filtered = people
  .filter((person)=>{
    return person.age > 21;
  })
  .map((person)=>{
    return person.name;
  });

function myClick(event) {
  const paragraphElement = document.querySelector('ul');
  //WIP error is below
  paragraphElement.value = filtered.map((item)=>{
    return <li>${item}</li>;
  });
}

document.querySelector("button").addEventListener("click", myClick);