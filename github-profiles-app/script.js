const API_URL = "https://api.github.com/users/"

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUserInfo("arshalsoren");

async function getUserInfo(username) {
    const response = await fetch(API_URL + username);
    const responseData = await response.json();

    newUserCard(responseData);

    getReposInfo(username);
}

async function getReposInfo(username) {
    const response = await fetch(API_URL + username + "/repos");
    const responseData = await response.json();

    addToCard(responseData);
}


function newUserCard(user) {
    const cardData = `
        <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}<br /><br />${user.location}</p>
                
                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repositories</strong></li>
                </ul>

                <h4>Public Repositories</h4>
                <div id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardData;
}

function addToCard(repos) {
    const addRepo = document.getElementById("repos");
    // console.log(repos);

    repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .forEach((repo) => {
            const newRepo = document.createElement("a");
            newRepo.classList.add("repo");

            newRepo.href = repo.html_url;
            newRepo.target = "_blank";
            newRepo.innerText = repo.name;

            addRepo.appendChild(newRepo);
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = search.value;

    if (user) {
        getUserInfo(user);

        search.value = "";
    }
});