const numbers = [5, 12, 8, 130, 44];

const narrowed = numbers.filter((number)=>{
  return number > 10;
});

console.log(narrowed);