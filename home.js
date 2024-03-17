 /**
  * You can modify these constants as you want or get rid of it, your choice
  * */ 

 const GRID_WIDTH = 50;
 const GRID_HEIGHT = 25;
 const fps = 10

 
 document.addEventListener('DOMContentLoaded', function () {
    var audioPlayer = document.getElementById('audio-player');
    var slider = document.getElementById('volume-slider');
    var volumeValue = document.getElementById('volume-value');

    slider.oninput = function() {
        var volume = this.value / 100;
        volumeValue.innerHTML = this.value + '%';
        audioPlayer.volume = volume; 
    };
});

function play(){

}
let volume = 0.5; 
document.getElementById('volume').addEventListener('input', function(e) {
    volume = e.target.value;
});

document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('audioDemarrage').play();
    document.getElementById('menu').style.display = 'none'
    initialiserJeu();
});
let keys = {
    up: 'ArrowUp',
    down: 'ArrowDown',
    left: 'ArrowLeft',
    right: 'ArrowRight'
};

function changeKey(direction) {
    window.addEventListener('keydown', function onKeyPress(e) {
        keys[direction] = e.key;
        document.getElementById(`key${direction.charAt(0).toUpperCase() + direction.slice(1)}`).value = e.key;
        window.removeEventListener('keydown', onKeyPress);
    });
}

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case keys.up:
            joueurPosition.y = Math.max(joueurPosition.y - 1, 0);
            break;
        case keys.down:
            joueurPosition.y = Math.min(joueurPosition.y + 1, hauteur - 1);
            break;
        case keys.left:
            joueurPosition.x = Math.max(joueurPosition.x - 1, 0);
            break;
        case keys.right:
            joueurPosition.x = Math.min(joueurPosition.x + 1, largeur - 1);
            break;
    }
    initialiserJeu();
});

document.getElementById('volume').addEventListener('input', function() {
    const volume = this.value;
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.volume = volume;
    });
});
document.getElementById('playButton').addEventListener('click', function() {
    window.location.href = 'game.html';
  });
