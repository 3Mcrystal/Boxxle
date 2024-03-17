import { Levels } from "./level.js";

let myGrid = document.getElementById("grid");
let nextLvl = 0;
let lvl = Levels[nextLvl];
let tab = JSON.parse(JSON.stringify(lvl));
const keys = {
  left: "ArrowLeft",
  right: "ArrowRight",
  up: "ArrowUp",
  down: "ArrowDown",
  z: "z",
  q: "q",
  s: "s",
  d: "d",
};

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
        img.src = "./assets/Aria.gif";;
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

const playerCoords = () => {
  const PLAYER = 3;
  let y = tab.findIndex((row) => row.includes(PLAYER));
  let x = tab[y].indexOf(PLAYER);

  return { x: x, y: y };
}

const move = (dx, dy, spot) => {
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
    //sucessSound.play();
    tab[newy + dy][newx + dx] = 5;
    tab[newy][newx] = 3;
    tab[y][x] = 0;
  } else if (tab[newy][newx] === 4) {
    tab[newy][newx] = 3;
    tab[y][x] = 0;
  } else if (tab[newy][newx] === 5 && tab[newy + dy][newx + dx] === 4) {
    //sucessSound.play();
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

const positionStockage = (data) => {
  let sucess = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[0].length; j++) {
      if (data[i][j] === 4) {
        sucess.push([i, j]);
      }
    }
  }
  return sucess;
}

let spot = positionStockage(lvl);

document.addEventListener("keydown", (event) => {
  let e = event.key;

  if (e == keys.left || e == keys.q) {
    move(-1, 0, spot); 
  } else if (e == keys.right || e == keys.d) {
    move(1, 0, spot);
  } else if (e == keys.down || e == keys.s) {
    move(0, 1, spot);
  } else if (e == keys.up || e == keys.z) {
    move(0, -1, spot);
  }

  let counter = 0;
  for (let i = 0; i < spot.length; i++) {
    if (tab[spot[i][0]][spot[i][1]] === 0) {
      tab[spot[i][0]][spot[i][1]] = 4;
    } else if (tab[spot[i][0]][spot[i][1]] === 5) {
      counter += 1;
    }
  }

  if (counter == spot.length) {
    nextLvl += 1;
    tab = JSON.parse(JSON.stringify(Levels[nextLvl]));
    spot = positionStockage(tab);
  }

  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", () => {
    //resetSound.play();
    tab = JSON.parse(JSON.stringify(Levels[nextLvl]));
    console.log(nextLvl);
    draw();
  });
});

const gameLoop = () => {
    draw();
    window.requestAnimationFrame(gameLoop);
  }

let currentLevel = document.getElementById("current-level");
currentLevel.textContent = `Current Level : ${nextLvl}`;
window.requestAnimationFrame(gameLoop);