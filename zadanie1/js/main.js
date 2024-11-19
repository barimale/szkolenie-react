const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

const extendedUser = { ...user, isAdmin: true }

console.log(extendedUser)