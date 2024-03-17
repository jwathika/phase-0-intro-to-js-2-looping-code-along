function writeCards(names, message) {
	function countDown(number) {
		let countdownMessages = [];
		for (let i = number; i >= 0; i--) {
			countdownMessages.push(i);
		}
		return countdownMessages;
	}

	let thankYouMessages = [];
	let i = 0;
	for (i; i < names.length; i++) {
		let countdownNumbers = countDown(names[i].length);
		console.log(countdownNumbers.join('... '));
		thankYouMessages.push(
			`Thank you, ${names[i]}, for the wonderful ${message} gift!`
		);
	}

	return thankYouMessages;
}
