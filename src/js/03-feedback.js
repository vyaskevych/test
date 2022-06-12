// import throttle from "lodash/throttle";
import throttle from "lodash.throttle"

const emailInput = document.querySelector('input[type=email]');
const messageInput = document.querySelector('textarea[name=message]');
const submitButton = document.querySelector('button[type=submit]');

const userInformation = {
  email: '',
  message: '',
};

const varLocalStorage = localStorage.getItem('feedback-form-state');

(() => {
  if (varLocalStorage) {
    emailInput.value = JSON.parse(varLocalStorage).email;
    messageInput.value = JSON.parse(varLocalStorage).message;
    console.log(
      `в хранилище осталось email = ${JSON.parse(varLocalStorage).email
      } и message = ${JSON.parse(varLocalStorage).message}`
    );
  }
})();

emailInput.addEventListener(
  'input',
  throttle(() => {
    userInformation.email = emailInput.value;
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(userInformation)
    );
  }, 500)
);

messageInput.addEventListener(
  'input',
  throttle(() => {
    userInformation.message = messageInput.value;
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(userInformation)
    );
  }, 500)
);

submitButton.addEventListener('click', e => {
  e.preventDefault();
  const submitedUserInformation = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  console.log(submitedUserInformation);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
