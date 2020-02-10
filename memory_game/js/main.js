const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push(cardOne);
//console.log("user flipped" + " " +cardsInPlay);
let cardTwo = cards[0];
cardsInPlay.push(cardTwo);
console.log("user flipped" + " " +cardsInPlay[1]);
if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("you found a match");
	}
	else {
		alert("Sorry, try again");
	}
}

