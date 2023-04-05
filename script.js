const container = document.getElementById("container");
const btnPupUp = document.getElementById("popup");
const resetPad = document.getElementById("resetPad");
let clickActive = false;
let containerSize = 16;

btnPupUp.addEventListener("click", (e) => {
	containerSize = parseInt(prompt("Insert a value between 1 and 100"));
	if (!validateNumber(containerSize)) alert("Type a real option");
	else {
		btnPupUp.disabled = 1;
		createLayout(containerSize);
		resetPad.disabled = 0;
	}
});
resetPad.addEventListener("click", (e) => {
	btnPupUp.disabled = 0;
	createLayout(16);
});
const validateNumber = (number) => {
	if (Number.isInteger(number) && number > 0 && number <= 100) return true;
	else return false;
};

container.addEventListener("click", (e) => {
	if (!clickActive) {
		container.addEventListener("mouseover", handleMouseOver);
		clickActive = true;
	} else {
		container.removeEventListener("mouseover", handleMouseOver);
		clickActive = false;
	}
});

const createLayout = (containerSize) => {
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
	for (let i = 1; i <= containerSize * containerSize; i++) {
		let div = document.createElement("div");

		div.classList.add(`square${i}`, "square");
		container.appendChild(div);
		container.style.gridTemplateColumns = "repeat(" + containerSize + ",1fr)";
	}
};

const handleMouseOver = (e) => {
	e.target.classList.toggle("active");
};

createLayout(16);
