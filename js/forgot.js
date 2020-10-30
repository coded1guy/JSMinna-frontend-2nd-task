let forms = document.querySelector('form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

let validate = () => {
  if(email.value.length > 5 && password.value.length > 4) {
    submit.disabled = false;
  } else{
    submit.disabled = true;
  }
}
validate();
email.oninput = () => { validate(); }
password.oninput = () => { validate(); }


let senData = () => {
  let loader = document.querySelector('.loader');
  loader.style.display = "block";
  forms.style.opacity = "0.3";
  setTimeout(() => {
    window.location.assign('Done.html');
  }, 2000);
}
submit.addEventListener('click', (Event) => {
  Event.preventDefault();
  senData();
});
