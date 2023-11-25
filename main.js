const button = document.getElementById('play');
const audio = new Audio('./nature-sounds.mp3');

let isPlaying = false;

button.addEventListener('click', () => {
    if (isPlaying) {
        button.textContent = 'Play audio';
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    } else {
        button.textContent = 'Stop audio';
        audio.loop = true;
        audio.play();
        isPlaying = true;
    }
});