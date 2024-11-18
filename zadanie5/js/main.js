    function getRandomInt() {
    return Math.min(Math.floor(Math.random() * 100) + 1, 100);
  }

  var counter = 3;
  document.querySelector("button").addEventListener("click", (e)=>{
    document.querySelector("p").nodeValue = getRandomInt();
    counter = counter -1;
    if(counter === 0)
    {
      document.querySelector("button").removeEventListener("click");
    }
  });
