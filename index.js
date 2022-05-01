//select a sound to play
//when a sound is selected others should stop playing
//click sound for pause and play

document.querySelector("#rain").addEventListener("click", playRain);
document.querySelector("#thunder").addEventListener("click", playThunder);
document.querySelector("#ocean").addEventListener("click", playOceanSound);
document.querySelector("#morning").addEventListener("click", playMorningSound);
const rain = new Audio("audios/rain.wav");
const thunder = new Audio("audios/thunder.wav");
const ocean = new Audio("audios/ocean.wav");
const morningbird = new Audio("audios/morning.wav");

function playRain() {
  if (rain.paused) {
    rain.play();
    thunder.pause();
    ocean.pause();
    morningbird.pause();
  } else {
    rain.pause();
  }
}

function playThunder() {
  if (thunder.paused) {
    thunder.play();
    rain.pause();
    ocean.pause();
    morningbird.pause();
  } else {
    thunder.pause();
  }
}

function playOceanSound() {
  if (ocean.paused) {
    ocean.play();
    thunder.pause();
    rain.pause();
    morningbird.pause();
  } else {
    ocean.pause();
  }
}

function playMorningSound() {
  if (morningbird.paused) {
    morningbird.play();
    rain.pause();
    thunder.pause();
    ocean.pause();
  } else {
    morningbird.pause();
  }
}
