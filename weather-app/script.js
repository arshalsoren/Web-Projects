const api_key = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const api_url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

async function getWeather(city) {
    const response = await fetch(api_url(city), { origin: "cors" });
    const responseData = await response.json();

    addWeather(responseData);
}

function addWeather(data) {
    const temp = tempConvert(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
        <small>${data.weather[0].main}</small>
    `;

    main.innerHTML = "";

    main.appendChild(weather);
}

function tempConvert(K) {
    return Math.floor(K - 273.15)
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;
    if (city) {
        getWeather(city);
    }
});