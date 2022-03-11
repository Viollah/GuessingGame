let randomNumber = Math.ceil((Math.random() * 100))

const numberGuess = document.querySelector(".numberGuess");
const guessBtn = document.querySelector(".guessBtn");
const message = document.querySelector(".message");

function newGame() {
    setTimeout(function() {
        message.innerHTML = ""
    }, 3000)
}

function guessBtnClicked() {
	const guessedNo = Number(numberGuess.value);

	if (guessedNo > 100 || guessedNo < 1) {
        message.innerHTML = 'You have exceeded the limit, enter a number between 1 & 100';

        setTimeout(function() {
            location.reload()
        }, 5000);

	}else if (guessedNo < randomNumber) {
		message.innerHTML = "Your guess is too low!";
		setTimeout(function(){
			message.innerHTML = "";
		}, 3000);

	} else if (guessedNo > randomNumber) {
		message.innerHTML = "Your guess is too high!";
		setTimeout(function(){
			message.innerHTML = "";
		}, 3000);

	} else {
		message.innerHTML =  ` the secret number is ${guessedNo}! `;
		reset()
		setTimeout(function(){
		message.innerHTML = "";
		newGame()
		message.innerHTML = 'New Game Started!!!'
	}, 5000);
}
}
	newGame()
	message.innerHTML = 'New Game Started!!!'


function reset() {
	randomNumber = Math.ceil((Math.random() * 100))
}

guessBtn.addEventListener('click', guessBtnClicked)