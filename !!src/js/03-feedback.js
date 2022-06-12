import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form')
const formStorage = 'feedback-form-state'
const { email, message } = form.elements;
const inputData = {};

document.addEventListener("DOMContentLoaded", function (event) {
    let saveData = localStorage.getItem(formStorage)
    if (saveData) {
        saveData = JSON.parse(saveData);
        email.value = saveData.email;
        message.value = saveData.message;
    }
});

form.addEventListener('input', throttle(handleInput, 500))
form.addEventListener('submit', handleSubmit)


function handleInput() {
    localStorage.setItem(formStorage, JSON.stringify({ email: email.value, message: message.value }))
}

function handleSubmit() {
    console.log({ email: email.value, message: message.value })
    alert({
        email: email.value, message: message.value
    })
    localStorage.removeItem(formStorage);
    email.value = "";
    message.value = "";
}