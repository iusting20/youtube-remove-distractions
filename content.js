setTimeout(() => {
  console.log("scripts actionZ !");

  let links = document.querySelector("#columns");
  let endScreen = document.querySelector(".html5-endscreen");

  links.remove();
  endScreen.remove();
}, 4000);
