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
		let lastLetter = document.querySelector("#letters :last-child");
		
		if (lastLetter) lastLetter.remove();
	} else if (Object.keys(dictionary).includes(e.key.toLowerCase())) {
		let letter = document.createElement("div");
		letter.classList.add("letter", e.key.toLowerCase());

		letter.addEventListener("click", letter.remove);

		letters.appendChild(letter);
	}
	
	if (letters.children.length == 0)
		letters.classList.add("empty")
	else
		letters.classList.remove("empty");

	updateScore();
});

function updateScore() {
	let result = 0;

	[].forEach.call(letters.children, (l) => {
		let letter = l.classList[1];

		result += dictionary[letter] ? dictionary[letter] : 0;
	});

	score.setAttribute("data-clipboard-text", result);
	score.innerText = result;
}

new ClipboardJS(score);
