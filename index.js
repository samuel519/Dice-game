
// First die

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Setting the RNG parameters (1-6)

var randomDiceImage = "dice" + randomNumber1 + ".png"; // Creating a string to match and change image source in HTML (dice1.png - dice6.png)

var randomDiceImageSrc1 = "images/" + randomDiceImage; // Connecting the RNG and string to the dice images folder (images/dice1.png - images/dice6.png)

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomDiceImageSrc1);


// Second die

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImageSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSrc2);


// Title changes depending outcome

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else {
  document.querySelector("h1").innerHTML = "Draw!";
}
