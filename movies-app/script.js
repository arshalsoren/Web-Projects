const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url) {
    const response = await fetch(url);
    const responseData = await response.json();

    showMovies(responseData.results);
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;

        const newMovie = document.createElement('div');
        newMovie.classList.add('movie');
        newMovie.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}" />
            <div class=movie-info>
                <h3>${title}</h3>
                <span class=${getClassByRate(vote_average)}>${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `;

        main.appendChild(newMovie);
    });

    return responseData;
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 7) {
        return 'yellow';
    } else { return 'red' };
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm){
        getMovies(SEARCH_API +searchTerm);

        search.value='';
    }
});