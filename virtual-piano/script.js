const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", () => playAudio(button));
});

function playAudio(button) {
    const sound = document.getElementById(button.dataset.key);
    sound.currentTime = 0;
    sound.play();
}

// Color Change
var color = [
    "linear-gradient(118deg, rgba(134,62,42,1) 19%, rgba(217,142,122,1) 50%, rgba(92,36,20,1) 81%)",
    "linear-gradient(118deg, rgba(187,125,81,1) 6%, rgba(191,125,79,1) 26%, rgba(208,152,113,1) 48%, rgba(179,116,71,1) 65%)",
    "linear-gradient(118deg, rgba(208,158,101,1) 20%, rgba(255,224,188,1) 50%, rgba(213,162,105,1) 80%)",
    "linear-gradient(118deg, rgba(227,104,127,1) 20%, rgba(255,161,179,1) 51%, rgba(230,105,130,1) 80%",
    "linear-gradient(118deg, rgba(135,198,255,1) 20%, rgba(205,231,255,1) 50%, rgba(135,198,255,1) 80%)",
    "linear-gradient(118deg, rgba(255,123,242,1) 20%, rgba(255,214,251,1) 50%, rgba(255,123,242,1) 80%)",
    "linear-gradient(118deg, rgba(46,131,100,1) 20%, rgba(91,247,190,1) 50%, rgba(46,131,100,1) 80%)",
    "linear-gradient(118deg, rgba(23,76,114,1) 20%, rgba(41,157,241,1) 50%, rgba(23,76,114,1) 80%)",
    "linear-gradient(118deg, rgba(42,29,20,1) 20%, rgba(219,133,73,1) 50%, rgba(42,29,20,1) 80%)",
    "linear-gradient(118deg, rgba(130,102,187,1) 20%, rgba(203,178,255,1) 50%, rgba(130,102,187,1) 80%)",
    "linear-gradient(to bottom, rgb(76,76,76) 0%,rgb(89,89,89) 10%,rgb(102,102,102) 19%,rgb(56,56,56) 36%,rgb(0,0,0) 74%,rgb(19,19,19) 100%)"
];
var i = 0;
document.querySelector("#switch").addEventListener("click", () => {
    i == color.length-1 ? i = 0 : i = i + 1;
    document.querySelector(".board").style.background = color[i]
})