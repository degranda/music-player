const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

//Checking if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.textContent = "pause";
  playBtn.setAttribute("title", "Pause");
  music.play();
}

//Pause
function pauseSong() {
  isPlaying = false;
  playBtn.textContent = "play_arrow";
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Play or Pause event listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
