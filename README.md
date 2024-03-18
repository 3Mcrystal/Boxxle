# YourAnimeList

## Contents

- I. [About the project](#i-about-the-project)
- II. [Prerequisites](#ii-prerequisites)
- III. [Installation](#iii-installation)
- IV. [Running the Application](#iv-running-the-application)
    - [A. On Node.js](#a-on-node.js)
    - [B. On VScode](#b-on-vscode)
    - [C. On Github.io](#c-on-github.io)
- V. [Main Features](#v-main-features)
    - [A. requestAnimationFrame Loop](#a-requestanimationframe-loop)
    - [B. CSS Grid Implementation](#b-css-grid-implementation)
    - [C. Dynamic Box Creation](#c-dynamic-box-creation)
    - [D. Level Generation](#d-level-generation)
    - [E. Player Movement](#e-playermovement)
    - [F. Color Change on Correct Position](#f-color-change-on-correct-position)
    - [G. Reset Button:](#g-reset-button)
    - [H. Preventing Game Start without Boxer](#h-preventing-game-start-without-Boxer)
- VI. [Bonus Features](#vi-bonus-features)
    - [A. Customizable Controls](#a-customizable-controls)
    - [B. Animated Boxer](#b-animated-boxer)
    - [C. Sound Effects](#c-sound-effects)
    - [D. Step Counter](#d-step-counter)
    - [E. Customizable Settings](#e-customizable-settings)
- VII. [Authors](#vii-authors)
    

## I. About the project

Boxxle is a puzzle game in which the player has to move boxes to their correct location in order to advance to the next level. 

## II. Prerequisites

- Node.js, You can download and install it from the [official Node.js website.](https://nodejs.org/en)

OR 

- Visual Studio Code, you can download and install it from the [visualstudio official website](https://code.visualstudio.com/)


### III. Installation 

1. Clone the project :
``` bash 
https://ytrack.learn.ynov.com/git/syassine/boxxle.git
``` 

 2. Change into the project directory :
```bash
cd boxxle    
```


## IV. Running the Application

## A. On Node.js

1. Install the dependencies by running the following command:

``` bash
npm install
```
2. Start the game by executing the following command:

``` bash
npm start
```


## B. On VScode

1. Install the Live Server extension, which lets you launch a local server directly from VS Code,

2. Open the game folder in Visual Studio Code,

3. Click on the "Go Live" button in the bottom right corner of your window,

4. The game window should open automatically in your default browser. If it doesn't, you can access http://localhost:5500/index.html in your browser,

5. Adjust the sound level and click on "play",

6. Have fun !

## C. On Github.io

1. visit https://3mcrystal.github.io/Boxxle/game.html


2. Press play and have fun


## V. Main Features

### A. requestAnimationFrame Loop:

Utilizes a recursive loop for smooth animation and gameplay.

### B. CSS Grid Implementation:

The game layout is built using CSS grid for flexibility and responsiveness.

### C. Dynamic Box Creation:

HTML elements representing boxes are created or moved upon collision with the player.

### D. Level Generation:

HTML elements are generated dynamically for each level.

### E. Player Movement:

Players can move using arrow keys, with collision detection preventing movement through walls and boxes.

### F. Color Change on Correct Position: 

When a box is correctly positioned, its element changes color.

### G. Reset Button:

Provides a reset button to restart the level.

### H. Preventing Game Start without Boxer: 

Ensures the game cannot start without the required number of boxes in the level.


## VI. Bonus Features

### A. Customizable Controls:

Players can choose their preferred control scheme.

### B. Animated Boxer:

Implement animations for the boxer character to enhance visual appeal.

### C. Sound Effects:

Add sounds for interactions and events within the game.

### D. Step Counter:

Track the number of steps taken to complete each level.


### E. Customizable Settings:

Offer options for adjusting volume, colors, and other settings.

## VII. Authors :

- Yassine
- Yaël [@3Mcrystal](https://www.github.com/3Mcrystal)
