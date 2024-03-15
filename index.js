import { Levels } from "./level.js";

const GRID_WIDTH = 50;
const GRID_HEIGHT = 25;
const fps = 10
const keys = {
    37: 'left',
    39: 'right',
    38: 'up',
    40: 'down'
}

const draw = () => {
  myGrid.innerHTML = "";
  for (let i of tab) {
    for (let j of i) {
      let img = document.createElement("img");

      if (j == 0) {
      } else if (j == 1) {
        img.src = "./assets/wall.png";
        img.classList.add("wall");
      } else if (j == 2) {
        img.src = "./assets/box.png";
        img.classList.add("box");
      } else if (j == 3) {
        img.src = "./assets/Aria.gif";
        img.classList.add("Aria");
      } else if (j == 4) {
        img.src = "./assets/spot.png";
        img.classList.add("spot");
      } else if (j == 5) {
        img.src = "./assets/boxOK.png";
        img.classList.add("boxOK");
      }
      myGrid.appendChild(img);
    }
  }
}