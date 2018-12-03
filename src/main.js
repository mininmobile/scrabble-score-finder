let letters = document.getElementById("letters");
let score = document.getElementById("score");

document.addEventListener("keydown", (e) => {
	if (e.key == "Backspace") {
		document.querySelector("#letters *:last-child").remove();
	} else if (e.key.length == 1) {
		let letter = document.createElement("div");
		letter.innerText = e.key;

		letters.appendChild(letter);
	}

	updateScore();
});
