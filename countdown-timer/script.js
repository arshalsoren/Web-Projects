const daysId = document.getElementById("days");
const hoursId = document.getElementById("hours");
const minsId = document.getElementById("mins");
const secsId = document.getElementById("secs");

const setDate = "1 Jan 2022";

function timer() {
    const newDate = new Date(setDate);
    const currentDate = new Date();
    const totalSecs = (newDate - currentDate) / 1000;

    const days = Math.floor(totalSecs / 3600 / 24);
    const hours = Math.floor(totalSecs / 3600) % 24;
    const mins = Math.floor(totalSecs / 60) % 60;
    const secs = Math.floor(totalSecs) % 60;

    daysId.innerHTML = days;
    hoursId.innerHTML = hours;
    minsId.innerHTML = mins;
    secsId.innerHTML = secs;
}

// intial call
timer();

setInterval(timer, 1000);