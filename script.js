let gridSizeInput = 16;
let colorValue = `#d62828`;
let modeState = "singleColor";

const grid = document.querySelector(".grid");
const newGridBtn = document.querySelector(".new-grid");
const userColor = document.querySelector(".color-picker");
const multiColorBtn = document.querySelector(".multi-color");
const singleColorBtn = document.querySelector(".single-color");

userColor.oninput = (e) => updateColor(e.target.value);
newGridBtn.onclick = () => updateGrid();
multiColorBtn.onclick = () => updateMode("multiColor");
singleColorBtn.onclick = () => updateMode("singleColor");

function updateMode(newModeState) {
  setMode(newModeState);
  modeState = newModeState;
}

function updateColor(newColorValue) {
  colorValue = newColorValue;
}

function setMode(newModeState) {
  if (newModeState === "multiColor") {
    multiColorBtn.classList.add("active");
    singleColorBtn.classList.remove("active");
  } else if (newModeState === "singleColor") {
    singleColorBtn.classList.add("active");
    multiColorBtn.classList.remove("active");
  }
}

function changeColor(e) {
  if (modeState === "singleColor") {
    e.target.style.backgroundColor = colorValue;
  } else if (modeState === "multiColor") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }
}

function updateGrid() {
  handleInput(gridSizeInput);
  grid.innerHTML = "";
  initGrid(gridSizeInput);
}

function handleInput() {
  gridSizeInput = document.querySelector(".input").value;
  if (gridSizeInput > 100) gridSizeInput = 100;
  if (gridSizeInput < 10) gridSizeInput = 10;
  return gridSizeInput;
}

function initGrid(gridSizeInput) {
  grid.style.gridTemplateColumns = `repeat(${gridSizeInput} , 1fr)`;
  for (i = 0; i < gridSizeInput * gridSizeInput; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("grid-block");
    gridBlock.addEventListener("mouseover", changeColor);
    grid.appendChild(gridBlock);
  }
}
initGrid(gridSizeInput);
