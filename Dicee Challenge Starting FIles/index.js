var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var changeImageLeft = document.getElementsByClassName("img1")[0]; // Access the first element
changeImageLeft.setAttribute("src", `./images/dice${randomNumber1}.png`);

var changeImageRight = document.getElementsByClassName("img2")[0]; // Access the first element
changeImageRight.setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "Draw.";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 wins.";
} else {
  document.querySelector("h1").innerText = "Player 1 wins.";
}
