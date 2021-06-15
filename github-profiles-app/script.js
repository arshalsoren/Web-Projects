const API_URL = 'https://api.github.com/users/'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUserInfo('arshalsoren');

async function getUserInfo(user) {
    const response = await fetch(API_URL + user);
    const responseData = await response.json();

    newUserCard(responseData);
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
                    <li>${user.public_repos}<strong>Public Repos</strong></li>
                </ul>
            </div>
        </div>
    `;

    main.innerHTML = cardData;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = search.value;

    if (user) {
        getUserInfo(user);

        search.value = "";
    }
});