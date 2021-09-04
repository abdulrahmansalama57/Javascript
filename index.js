
var score, randomScore, activePlayer,dice, gameActive;

start();

document.querySelector('.btn-roll').addEventListener('click', function(){

	if(gameActive){

	//1-Random Numper
	var dice = Math.floor(Math.random() * 6) + 1;


	//2-Display The Result
	var dicDOM = document.querySelector('.dice');
	dicDOM.style.display = 'block';
	dicDOM.src = 'dice-' + dice +'.png';

	//3-Update The Round Score.

	 if(dice !== 1){
	 	randomScore += dice;
	 	document.querySelector('#current-' + activePlayer).textContent = randomScore;
	 }
	 else {
	 	//Next Player

	 	nextplayer();
	 }
	}
});

document.querySelector('.btn-hold').addEventListener('click', function(){

	if(gameActive)
	{
 
	//Add Current Score to Global Score
	score[activePlayer] += randomScore;

	//Up Data UI
	document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

	//Check if the player Won The game
	if(score[activePlayer] >= 20) {
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer +'-panel').classList.add('Winner');
		document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
		gameActive = false;
	}


	//Next Player
	nextplayer();		
	}


});

//Srart New Game 

document.querySelector('.btn-new').addEventListener('click', start);

function nextplayer(){
	    //Next Player
	 	if(activePlayer === 0){activePlayer =1;}
	 		else{activePlayer =0;}

        randomScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';	
}
function start() {
 score = [0,0];
 randomScore = 0;
 activePlayer= 0;
 gameActive = true;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player-1';
document.getElementById('name-1').textContent = 'Player-2';
// 

}
