  // zdarzenie do uzupelnienia
  function getRandomInt() {
    return Math.min(Math.floor(Math.random() * 100) + 1, 100);
  }

  const randomNumber = getRandomInt();

  console.log(randomNumber);