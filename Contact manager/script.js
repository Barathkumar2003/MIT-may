const submit = document.getElementById('submit');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const show = document.getElementById('show');


function display() {
  JSON.stringify(localStorage.setItem('userName', userName.value));
  JSON.stringify(localStorage.setItem('userEmail', userEmail.value));

  show.innerHTML = userName.value, userEmail.value;
 
}