
const formElement     = document.querySelector('form');
const inputElement    = document.getElementById('lbs-input');

const outputElement   = document.getElementById('output');
const gramOutput      = document.getElementById('grams-output');
const kgOutput        = document.getElementById('kg-output');
const ogOutput        = document.getElementById('og-output');

const convertToGram = (inputElement) => {
     return inputElement / 0.0022046;
}

const convertToKg = (inputElement) => {
    return inputElement / 0.0022046;
}

const convertToOg = (inputElement) => {
    return inputElement / 0.0022046;
}

formElement.addEventListener('submit', function (e) {

    e.preventDefault();

    gramOutput.innerHTML = convertToGram(inputElement.value);
    kgOutput.innerHTML   = convertToKg(inputElement.value);
    ogOutput.innerHTML   = convertToOg(inputElement.value);

    outputElement.style.visibility = 'visible';
})

document.addEventListener('DOMContentLoaded',() => {

    outputElement.style.visibility = 'hidden';
})