const book = ["1984", "George Orwell", "Dystopia", 328];

const [title, author, , pages] = book;

function Print(title, author, pages) {
  console.log(`Książka "${title}" napisana przez ${author} ma ${pages} stron.`);
}

Print(title, author, pages);