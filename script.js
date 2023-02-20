const grid = document.querySelector(".grid");
const input = document.querySelector(".input").value;
const clear = document.querySelector(".clear");

clear.onclick = () => newGrid();

function clearGrid() {
  grid.innerHTML = "";
}

function newGrid() {
    clearGrid();
    initGrid(input);
}

function initGrid() {
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
