const products = [
  { name: "Laptop", price: 3000 },
  { name: "Phone", price: 1500 },
  { name: "Tablet", price: 1000 }
];

const names = products.map((product) => {
  return product.name.toUpperCase();
});

console.log(names);