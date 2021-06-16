const passw = document.getElementById("passw");
const copy = document.getElementById("copy");
const len = document.getElementById("len");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+=-";

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];

}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];

}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];

}

function generatePassword() {
    const newLen = len.value;

    let password = "";

    if (upper.checked) { password += getUpperCase(); }
    if (lower.checked) { password += getLowerCase(); }
    if (number.checked) { password += getNumber(); }
    if (symbol.checked) { password += getSymbol(); }

    for (let i = password.length; i < newLen; i++) {
        const rndm = generateRNDM();
        password += rndm;
    }

    passw.innerText = password;

}

function generateRNDM(){
    const passTxt = [];

    if (upper.checked) { passTxt.push(getUpperCase()); }
    if (lower.checked) { passTxt.push(getLowerCase()); }
    if (number.checked) { passTxt.push(getNumber()); }
    if (symbol.checked) { passTxt.push(getSymbol()); }

    if(passTxt.length === 0) return "";
    return passTxt[Math.floor(Math.random() * passTxt.length)];
}

generate.addEventListener("click", generatePassword);

copy.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = passw.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});