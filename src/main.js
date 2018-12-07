let letters = document.getElementById("letters");
let score = document.getElementById("score");

let dictionary = {
	"a": 1,
	"b": 3,
	"c": 3,
	"d": 2,
	"e": 1,
	"f": 4,
	"g": 2,
	"h": 4,
	"i": 1,
	"j": 8,
	"k": 5,
	"l": 1,
	"m": 3,
	"n": 1,
	"o": 1,
	"p": 3,
	"q": 10,
	"r": 1,
	"s": 1,
	"t": 1,
	"u": 1,
	"v": 4,
	"w": 4,
	"x": 8,
	"y": 4,
	"z": 10
}

document.addEventListener("keydown", (e) => {
	if (e.key == "Backspace") {
		document.querySelector("#letters *:last-child").remove();
	} else if (e.key.length == 1) {
		let letter = document.createElement("div");
		letter.classList.add("letter", e.key);

		letter.addEventListener("click", letter.remove);

		letters.appendChild(letter);
	}

	updateScore();
});

function updateScore() {
	let result = 0;

	letters.childNodes.forEach((l) => {
		let letter = l.getAttribute("class").split(" ")[1];

		result += dictionary[l.textContent] ? dictionary[l.textContent] : 0;
	});

	score.innerText = result;
}
