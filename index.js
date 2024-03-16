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
        img.src = "./assets/grass.jpg";
        img.classList.add("floor");
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

const playerCoords= () => {
  const PLAYER = 3;
  let y = tab.findIndex((row) => row.includes(PLAYER));
  let x = tab[y].indexOf(PLAYER);

  return { x: x, y: y };
}

function move(dx, dy, spot) {
  let { x, y } = playerCoords();
  let newx = x + dx;
  let newy = y + dy;
  if (tab[newy][newx] === 0) {
    tab[newy][newx] = 3;
    tab[y][x] = 0;
  } else if (tab[newy][newx] === 2 && tab[newy + dy][newx + dx] === 0) {
    tab[newy + dy][newx + dx] = 2; 
    tab[newy][newx] = 3;
    tab[y][x] = 0; 
  } else if (tab[newy][newx] === 2 && tab[newy + dy][newx + dx] === 4) {
    sucessSound.play();
    tab[newy + dy][newx + dx] = 5;
    tab[newy][newx] = 3;
    tab[y][x] = 0;
  } else if (tab[newy][newx] === 4) {
    tab[newy][newx] = 3;
    tab[y][x] = 0;
  } else if (tab[newy][newx] === 5 && tab[newy + dy][newx + dx] === 4) {
    sucessSound.play();
    tab[newy + dy][newx + dx] = 5;
    tab[newy][newx] = 3;
    tab[y][x] = 0;
  } else if (tab[newy][newx] === 5 && tab[newy + dy][newx + dx] === 0) {
    tab[newy + dy][newx + dx] = 2;
    tab[newy][newx] = 3;
    tab[y][x] = 0;
  }
  draw();
}
