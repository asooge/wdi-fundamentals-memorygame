console.log("up and running");

//console.log("user picked " + cardFour);//

const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];

const cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	};	
}

function flipCard(){
	const cardID = this.getAttribute('data-id')
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);	
	this.setAttribute('src', cards[cardID].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	};

}

//create gameboard
function createBoard(){
	for (i=0; i<cards.length; i++){
		const newCard = document.createElement('img');
		newCard.setAttribute('src', "images/back.png");
		newCard.setAttribute('data-id', i);
		newCard.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(newCard);
	}
}

createBoard();
