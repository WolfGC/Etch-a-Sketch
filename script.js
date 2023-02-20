let input = 16;
const grid = document.querySelector(".grid");
const newGridBtn = document.querySelector(".new-grid");

newGridBtn.onclick = () => newGrid();

function newGrid() {
  input = document.querySelector(".input").value;
  clearGrid();
  initGrid(input);
}

function clearGrid() {
  grid.innerHTML = "";
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

function changeColor(e) {
  e.target.classList.add("active");
}
