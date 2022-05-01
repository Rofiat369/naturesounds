//select a sound to play
//when a sound is selected others should stop playing

document.querySelector("#rain").addEventListener("click", playRain);
document.querySelector("#thunder").addEventListener("click", playThunder);
document.querySelector("#ocean").addEventListener("click", playOceanSound);
document.querySelector("#morning").addEventListener("click", playMorningSound);
const rain = new Audio("rain.wav");
const thunder = new Audio("thunder.wav");
const ocean = new Audio("ocean.wav");
const morningbird = new Audio("morning.wav");

function playRain(){
    rain.play();
    thunder.pause();
    ocean.pause();
    morningbird.pause();
}

function playThunder(){
    thunder.play();
    rain.pause();
    ocean.pause();
    morningbird.pause();
}

function playOceanSound(){
    ocean.play();
    thunder.pause();
    rain.pause();
    morningbird.pause();
}

function playMorningSound(){
    morningbird.play();
    rain.pause();
    thunder.pause();
    ocean.pause();
}