function randomNumberDice(imgClass) {
  var n1 = Math.random(1);
  var randomNumber = Math.floor(n1 * 6 + 1);
  var img1 = document.querySelector(`.${imgClass}`)
  var srcPath = setImgPath(randomNumber)
  img1.setAttribute("src", srcPath)

  return randomNumber;
}

function setImgPath(randomNumber) {
  var srcPath = `images/dice${randomNumber}.png`;
  return srcPath;
}

function winner() {
  var heading = document.querySelector("h1")
  var player1 = randomNumberDice("img1");
  var player2 = randomNumberDice("img2");

  if (player1 > player2) {
    heading.innerHTML = "🚩 player 1 wins!"
  } else if (player1 < player2) {
    heading.innerHTML = "player 2 wins! 🚩"
  } else {
    heading.innerHTML = "draw!"
  }
}