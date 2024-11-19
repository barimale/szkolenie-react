function getRandomInt() {
  return Math.min(Math.floor(Math.random() * 100) + 1, 100);
}

let counter = 3;
function myClick() {
  let paragraphElement = document.querySelector('p');
  paragraphElement.textContent = getRandomInt();

  counter -= 1;
  if (!counter) {
    document.querySelector("button").removeEventListener("click", myClick);
  }
}

document.querySelector("button").addEventListener("click", myClick);
