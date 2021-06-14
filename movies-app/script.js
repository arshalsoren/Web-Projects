const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

async function getMovies() {
    const response = await fetch(API_URL);
    const responseData = await response.json();

    responseData.results.forEach((movie) => {
        const { poster_path, title, vote_average } = movie;

        const newMovie = document.createElement('div');
        newMovie.classList.add('movie');
        newMovie.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}" />
            <div class=movie-info>
                <h3>${title}</h3>
                <span>${vote_average}</span>
            </div>
        `;

        document.body.appendChild(newMovie);
    });

    return responseData;
}

getMovies();