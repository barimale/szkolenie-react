    function getRandomInt() {
    return Math.min(Math.floor(Math.random() * 100) + 1, 100);
  }

  var counter = 3;
  function myClick(event) {
    // WIP
    console.log(getRandomInt());
    const paragraphElement = document.querySelector('p');
    paragraphElement.value = getRandomInt();
    
    counter = counter-1;
    if(counter === 0)
    {
      document.querySelector("button").removeEventListener("click", myClick);
    }
  }

  document.querySelector("button").addEventListener("click", myClick);
