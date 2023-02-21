let input = 16;
let colorValue = `#d62828`;
let modeValue = 'singleColor';

function updateColor(newColor) {
  colorValue = newColor;
}

function updateMode(newMode) {
  setMode(newMode);
  modeValue = newMode;
}

const grid = document.querySelector(".grid");
const newGridBtn = document.querySelector(".new-grid");
const multiColorBtn = document.querySelector(".multi-color");
const singleColorBtn = document.querySelector(".single-color");
const userColor = document.querySelector('.color-picker');

userColor.oninput = (e) => updateColor(e.target.value);
newGridBtn.onclick = () => newGrid();
multiColorBtn.onclick = () => updateMode('multiColor');
singleColorBtn.onclick =() => updateMode('singleColor');

function changeColor(e) {
  if(modeValue === 'singleColor') {
  e.target.style.backgroundColor = colorValue;
} else if (modeValue === 'multiColor') {
  const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
} 
}

function setMode(newMode) {
  if(modeValue === 'multiColor') {
    multiColorBtn.classList.remove('active');
  } else if (modeValue === 'singleColor') {
    singleColorBtn.classList.remove('active');
  }

  if (newMode === 'multiColor') {
    multiColorBtn.classList.add('active');
  } else if (newMode === 'singleColor') {
    singleColorBtn.classList.add('active');
  }
}

function newGrid() {
  handleInput(input);
  grid.innerHTML = '';
  initGrid(input);
}

function handleInput() {
  input = document.querySelector(".input").value;
  if (input > 100) input = 100;
  if (input < 10 ) input = 10;
  return input;
}

function initGrid(input) {
  grid.style.gridTemplateColumns = `repeat(${input} , 1fr)`;
  for (i = 0; i < input * input; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("grid-block");
    gridBlock.addEventListener("mouseover", changeColor);
    grid.appendChild(gridBlock);
  }
}
initGrid(input);
