const main = document.querySelector("main");
const button = document.getElementById("submit");
const emailAddress = document.getElementById("email");
const errorMsg = document.querySelector('.error-msg');
const subscribe = document.querySelector('.subscribe');
const modalMsg = document.querySelector('.modal__email-msg');
const closeModalBtn = document.querySelector('.close-modal');

const emailValidator = function() {
  if (emailAddress.value == "" ){
    errorMsg.innerHTML = "Forgetting your email address?";
    subscribe.className = "subscribe form-error";
  } else  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailAddress.value)) {
    main.classList.toggle('modal-open');
    subscribe.className = "subscribe";
    modalMsg.textContent = `An email will be sent to ${emailAddress.value}.`;
    emailAddress.value = "";
  } else {
    errorMsg.innerHTML = "Please enter a valid email address.";
    subscribe.className = "subscribe form-error";
  }
};

const emailReset = function() {
  subscribe.className = "subscribe";
  emailAddress.value = "";
};

const closeModal = function() {
  main.classList.toggle('modal-open');
};

button.addEventListener('click', emailValidator);
emailAddress.addEventListener('click', emailReset);
emailAddress.addEventListener('focus', emailReset);
closeModalBtn.addEventListener('click', closeModal);
closeModalBtn.addEventListener('focus', closeModal);