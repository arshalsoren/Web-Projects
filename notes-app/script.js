const addBtn = document.getElementById("add");

const texts = JSON.parse(localStorage.getItem("texts"));

if (texts) {
    texts.forEach((text) => {
        addNewNote(text);
    });
}

addBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote(text = "") {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="far fa-edit"></i></button>
                <button class="delete "><i class="far fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="main ${text ? "hidden" : ""}"></textarea>
        </div>
    `;

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');

    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = marked(text);

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    deleteBtn.addEventListener('click', () => {
        note.remove();

        updateLocalStorage();
    });

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);

        updateLocalStorage();
    })

    document.body.appendChild(note);
}

function updateLocalStorage() {
    const storeText = document.querySelectorAll('textarea');

    const texts = [];

    storeText.forEach((text) => {
        texts.push(text.value);
    });

    localStorage.setItem('texts', JSON.stringify(texts));
}