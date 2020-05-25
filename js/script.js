// Lista Email!!!!
var emailForm = prompt("email");
var alertForm = document.getElementById('js_alert');
var email = ['pinco@aol.com', 'pallino@aol.com', 'lucky@aol.com', 'pinina@aol.com']
var mailCorretta = false;

for ( var i = 0; i < email.length; i++) {
   if (email[i] === emailForm) {
   mailCorretta = true;
 }
}

if (mailCorretta) {
  alert('Email corretta, puo accedere');
  alert.innerHTML = 'Email corretta, puo accedere';
} else {
  alert('Mi dispiace, non puoi accedere');
  alert.innerHTML = 'Mi dispiace, non puoi accedere';
}


// Gioco dei dadi!!!

var buttonSi = document.getElementById('js_si');
var buttonNo = document.getElementById('js_no');

var hiddenUno = document.getElementById('js_hidden-1');
var hiddenDue = document.getElementById('js_hidden-2');

buttonSi.addEventListener('click',
 function() {
   hiddenDue.className = 'wrapper';
 } )

buttonNo.addEventListener('click',
function() {
  hiddenDue.className = 'wrapper hidden';
} )

var buttonVersus = document.getElementById('js_versus');
var playerUtente = document.getElementById('js_utente');
var playerComputer = document.getElementById('js_computer');
var lama = document.getElementById('lama');
buttonVersus.addEventListener('click',
function() {
  playerUtente.innerHTML = Math.floor(Math.random() * 6) + 1;
  playerComputer.innerHTML = Math.floor(Math.random() * 6) + 1;

})
