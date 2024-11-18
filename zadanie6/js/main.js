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
  const ulElement = document.querySelector('ul');
  filtered.forEach((item)=>{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    ulElement.appendChild(li);
  })
  document.querySelector("button").removeEventListener("click", myClick);
}

document.querySelector("button").addEventListener("click", myClick);