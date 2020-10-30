let forms = document.querySelector('form');
let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let phoneNo = document.querySelector('#phone-no');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let checker = document.querySelector('#checker');
let submit = document.querySelector('#submit');

let validate = () => {
  if(fname.value.length > 3 && lname.value.length > 3 && username.value.length > 3 && 
    email.value.length > 5 && phoneNo.value.length > 10 && password.value.length > 4 && 
    checker.checked == true && password.value == confirmPassword.value) {
    submit.disabled = false;
  } else{
    submit.disabled = true;
  }
}
validate();
fname.oninput = () => { validate(); }
lname.oninput = () => { validate(); }
username.oninput = () => { validate(); }
email.oninput = () => { validate(); }
phoneNo.oninput = () => { validate(); }
password.oninput = () => { validate(); }
confirmPassword.oninput = () => { validate(); }


let senData = () => {
  let loader = document.querySelector('.loader');
  loader.style.display = "block";
  forms.style.opacity = "0.3";
  setTimeout(() => {
    window.location.assign('../Done.html');
  }, 2000);
}
submit.addEventListener('click', (Event) => {
  Event.preventDefault();
  senData();
});
