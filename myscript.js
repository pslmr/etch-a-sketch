// const sketchPad = document.querySelector(".sketchPad");
// const setSizeBtn = document.querySelector(".size-btn");
// const eraseBtn = document.querySelector(".erase-btn");

// function initGrid() {
// 	for (let i = 1; i <= 16 * 16; i++) {
// 		const gridBox = document.createElement("div");
// 		gridBox.setAttribute("class", "gridBox");
// 		sketchPad.appendChild(gridBox);
// 		gridBox.addEventListener("mouseover", (e) => {
// 			gridBox.style.backgroundColor = "black";
// 		});
// 	}
// }

// function newGrid(size) {
// 	while (sketchPad.firstChild) {
// 		sketchPad.removeChild(sketchPad.firstChild);
// 	}

// 	for (let i = 1; i <= size * size; i++) {
// 		const gridBox = document.createElement("div");
// 		gridBox.setAttribute("class", "gridBox");
// 		sketchPad.appendChild(gridBox);
// 		gridBox.addEventListener("mouseover", () => {
// 			gridBox.style.backgroundColor = "black";
// 		});
// 		sketchPad.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
// 	}
// }

// setSizeBtn.addEventListener("click", () => {
// 	let size = prompt("Enter desired grid size per side, must be not greater than 100: ", "16");
// 	newGrid(validateSize(size));
// });

// function validateSize(size) {
// 	if (size > 100) {
// 		while (true) {
// 			size = prompt("Please enter grid size per side, must be not greater than 100: ", "16");
// 			if (size > 100) {
// 				continue;
// 			} else {
// 				return size;
// 			}
// 		}
// 	}
// 	return size;
// }

// eraseBtn.addEventListener('click', () => {

// });

// initGrid();

const canvas = document.querySelector(".canvas");
const sliderValue = document.querySelector(".slider-value");
const slider = document.querySelector("#slider");
const cells = canvas.children;

function initGrid() {
	const sliderValue = document.getElementById("slider").value;
	canvas.setAttribute("style", `grid-template-columns: repeat(${sliderValue}, 1fr); grid-template-rows: repeat(${sliderValue}, 1fr);`);
	for (let i = 0; i < sliderValue * sliderValue; i++) {
		const div = document.createElement("div");
		div.classList.add("cell");
		canvas.appendChild(div);
		div.addEventListener("mouseover", (e) => {
			e.target.style.backgroundColor = "black";
		});
	}
}

initGrid();

const clearBtn = document.querySelector(".new-btn");

clearBtn.addEventListener("click", () => {
	clearChildNodes();
	initGrid();
});

function clearChildNodes() {
	while (canvas.firstChild) {
		canvas.removeChild(canvas.firstChild);
	}
}

slider.addEventListener("change", () => {
	clearChildNodes();
	initGrid();
	sliderValue.textContent = document.getElementById("slider").value + "x" + document.getElementById("slider").value;
});

const rbwBtn = document.querySelector(".rbw-btn");

rbwBtn.addEventListener("click", () => {
	let value = document.getElementById("slider").value;
	for (let i = 0; i < value * value; i++) {
		cells[i].addEventListener("mouseover", (e) => {
			e.target.style.backgroundColor = randomColorGen();
		});
	}
});

function randomColorGen() {
	let hexValues = "0123456789ABCDEF";
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += hexValues[Math.floor(Math.random() * 16)];
	}

	return color;
}
