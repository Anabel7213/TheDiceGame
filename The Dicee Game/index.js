document.getElementById("btn").addEventListener("click", function() {

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //player1
var randomDiceImage = "./images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //player2
var randomDiceImage = "./images/dice" + randomNumber2 + ".png"
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage);

setTimeout(function() {
if(randomNumber1 > randomNumber2) { //vary title
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "🤝 It's a tie!";
}
}, 400);
});