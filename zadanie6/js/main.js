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

// Wykorzystać zdarzenie, aby wyświetlić tę listę imion w liście HTML (`<ul>`) po kliknięciu w przycisk.
<ul>
  {filtered.map((item)=>{
    return <li>${item}</li>;
  })}
</ul>