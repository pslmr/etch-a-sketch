const canvas = document.querySelector(".canvas");
const sliderValue = document.querySelector(".slider-value");
const slider = document.querySelector("#slider");
const cells = canvas.children;
const color = document.querySelector("#colorpicker");

//Make the canvas/grid
function initGrid() {
	const sliderValue = document.getElementById("slider").value;
	canvas.setAttribute("style", `grid-template-columns: repeat(${sliderValue}, 1fr); grid-template-rows: repeat(${sliderValue}, 1fr);`);
	for (let i = 0; i < sliderValue * sliderValue; i++) {
		const div = document.createElement("div");
		div.classList.add("cell");
		canvas.appendChild(div);
		div.addEventListener("mouseover", (e) => {
			//e.target.style.backgroundColor = "black";
			e.target.style.backgroundColor = "rgba(0, 0, 0, 1)";
		});
	}
}

//Reset and clear canvas of all child nodes using while loop.
function clearChildNodes() {
	while (canvas.firstChild) {
		canvas.removeChild(canvas.firstChild);
	}
}

//generate random hexcode color
function randomColorGen() {
	let hexValues = "0123456789ABCDEF";
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += hexValues[Math.floor(Math.random() * 16)];
	}

	return color;
}

//function to clear whole page. remove all child and initialize new grid basewd on slider value.
const clearBtn = document.querySelector(".new-btn");
clearBtn.addEventListener("click", () => {
	clearChildNodes();
	initGrid();
});

//auto reset canvas when there is change in slider value.
slider.addEventListener("change", () => {
	clearChildNodes();
	initGrid();
	sliderValue.textContent = document.getElementById("slider").value + "x" + document.getElementById("slider").value;
});

//random rainbow function changing bg based on colorgen value pass.
const rbwBtn = document.querySelector(".rbw-btn");
rbwBtn.addEventListener("click", () => {
	let value = document.getElementById("slider").value;
	for (let i = 0; i < value * value; i++) {
		cells[i].addEventListener("mouseover", (e) => {
			e.target.style.backgroundColor = randomColorGen();
		});
	}
});

//toggle classes between cell class w/ border and cell-borderOff
const gridLineBtn = document.querySelector(".gridline-btn");
gridLineBtn.addEventListener("click", (e) => {
	let value = document.getElementById("slider").value;
	for (let i = 0; i < value * value; i++) {
		if (cells[i].classList.contains("cell")) {
			cells[i].classList.replace("cell", "cell-borderOff");
		} else {
			cells[i].classList.add("cell");
		}
	}
});

// Wasn't able to make grayscale function to work, please revisit.
// const grayscaleBtn = document.querySelector(".grayscale-btn");
// grayscaleBtn.addEventListener("click", () => {
// 	let value = document.getElementById("slider").value;
// 	for (let i = 0; i < value * value; i++) {
// 		cells[i].addEventListener("mouseover", (e) => {
// 			let alphaRGBA = Array.from(e.target.style.backgroundColor);
// 			console.log(alphaRGBA.join(""));
// 			//console.log(alphaVal.join(""));
// 			if (alphaVal.join("") > 1) return;
// 			console.log((e.target.style.backgroundColor = `rgba(0, 0, 0, ${parseFloat(alphaVal.join("")) + 0.1})`));

// 			console.log(alphaVal);
// 		});
// 	}
// });

//Color picker slider
color.addEventListener("change", () => {
	let colorVal = document.getElementById("colorpicker").value;
	let value = document.getElementById("slider").value;
	for (let i = 0; i < value * value; i++) {
		cells[i].addEventListener("mouseover", (e) => {
			e.target.style.backgroundColor = colorVal;
		});
	}
});

//Erase function to replace current bg to white
const eraseBtn = document.querySelector(".erase-btn");
eraseBtn.addEventListener("click", () => {
	let colorVal = document.getElementById("colorpicker").value;
	let value = document.getElementById("slider").value;
	for (let i = 0; i < value * value; i++) {
		cells[i].addEventListener("mouseover", (e) => {
			e.target.style.backgroundColor = "white";
		});
	}
});

initGrid();
