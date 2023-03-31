"use strict";

const container = document.getElementById("container");

for (let i = 1; i <= 16 * 16; i++) {
	let div = document.createElement("div");
	div.classList.add(`square${i}`, "square");
	container.appendChild(div);
}
