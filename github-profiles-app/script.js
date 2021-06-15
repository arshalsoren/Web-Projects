const API_URL = 'https://api.github.com/users/'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUserInfo(user) {
    const response = await fetch(API_URL + user);
    const responseData = await response.json();

    newUserCard(responseData);
}

function newUserCard(user) {
    const cardData = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div>
                <h2>${user.name}</h2>
                <p>${user.bio}<br />${user.location}</p>
                
                <ul>
                    <li>${user.followers}</li>
                    <li>${user.following}</li>
                    <li>${user.public_repos}</li>
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