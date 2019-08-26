console.log("up and running");

//console.log("user picked " + cardFour);//

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

const cardOne = cards[0];
const cardTwo = cards[1];


cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}
}