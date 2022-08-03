const canvas = document.querySelector(".canvas");
const sliderValue = document.querySelector(".slider-value");
const slider = document.querySelector("#slider");
const cells = canvas.children;
const color = document.querySelector("#colorpicker");

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

const gridLineBtn = document.querySelector(".gridline-btn");
gridLineBtn.addEventListener("click", () => {
	let value = document.getElementById("slider").value;
	for (let i = 0; i < value * value; i++) {
		cells[i].classList.toggle("cell");
	}
});

const grayscaleBtn = document.querySelector(".grayscale-btn");
grayscaleBtn.addEventListener("mouseover", () => {
	let value = document.getElementById("slider").value;
});

color.addEventListener("change", () => {
	let colorVal = document.getElementById("colorpicker").value;
	let value = document.getElementById("slider").value;
	for (let i = 0; i < value * value; i++) {
		cells[i].addEventListener("mouseover", (e) => {
			e.target.style.backgroundColor = colorVal;
		});
	}
});


initGrid();