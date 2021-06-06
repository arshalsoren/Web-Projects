const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", () => playAudio(button));
});

function playAudio(button) {
    const sound = document.getElementById(button.dataset.key);
    sound.currentTime = 0;
    sound.play();
}
