//Create Grid
function createGrid(gridSize) {
  for (var i = 0; i < gridSize; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    for (var j = 0; j < gridSize; j++) {
      var column = document.createElement("div");
      column.classList.add("box");
      row.appendChild(column);
      column.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "black";
      });
    }
    document.querySelector("#container").appendChild(row);
  }
}

//Create Randomized Color Grid
function createRandomColorGrid(gridSize) {
  for (var i = 0; i < gridSize; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    for (var j = 0; j < gridSize; j++) {
      var column = document.createElement("div");
      column.classList.add("box");
      row.appendChild(column);
      column.addEventListener("mouseenter", function () {
        this.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      });
    }
    document.querySelector("#container").appendChild(row);
  }
}

/*
//Function to randomize the color -- unfinished code
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  for (var i = 0; i < 3; i++) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    }
  return r + " ," + g + " ," + b
  };
var rgb = randomColor();
*/

//Reload function - used to reset grid, new grid, and new colors
function reload() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

//Function to Reset to a default Grid
var resetbutton = document.querySelector("#resetbutton");
resetbutton.addEventListener("click", function () {
  reload();
  createGrid(40);
});

//Create a New Grid
var newgridbutton = document.querySelector("#newgridbutton");
newgridbutton.addEventListener("click", function () {
  reload();
  let newGridSize = prompt("New Grid Size");
  createGrid(newGridSize);
});

//Create a New Grid with Random Color
var colorbutton = document.querySelector("#colorbutton");
colorbutton.addEventListener("click", function () {
  reload();
  createRandomColorGrid(40);
});
