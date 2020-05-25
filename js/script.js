// Lista Email!!!!
var emailForm = document.getElementById('js_email-form');
var email = ['pinco@aol.com', 'pallino@aol.com', 'lucky@aol.com', 'pinina@aol.com']
// Tasti Email!!!
var buttonInvia = document.getElementById('js_button-invia');
var alertForm = document.getElementById('js_alert');

var mailCorretta = false;

// Elementi da nascondere!!!
var hiddenZero = document.getElementById('js_hidden-0');

// Evento dopo il "Click" sul tasto "Invio"
buttonInvia.addEventListener('click',
function() {
  // Se inseriscono una mail della lista, autorizziamo l'acceso!!!
  for ( var i = 0; i < email.length; i++) {
     if (email[i] === emailForm.value) {
     mailCorretta = true;
   }
  }
  if (mailCorretta) {
    // Nel caso sia autorizzato l'acceso, nascondiamo la prima finestra, e apriamo quella del gioco!!
    alert('Email corretta, puo accedere');
    hiddenZero.className = 'wrapper hidden';
    hiddenUno.className = 'wrapper';
  } else {
    // Nel caso non si inserisca una mail della lista, viene fuori un messaggio!!
    alert('Mi dispiace, non puoi accedere');
    alertForm.innerHTML = '<b>Mi dispiace, non puoi accedere</b>';
  }

})

// GIOCO DEI DADI!!!

// Tasti del gioco!!
var buttonSi = document.getElementById('js_si');
var buttonNo = document.getElementById('js_no');

// Elementi da Nascondere!!!
var hiddenUno = document.getElementById('js_hidden-1');
var hiddenDue = document.getElementById('js_hidden-2');


// Evento dopo il "Click" sul tasto "SI"!!
buttonSi.addEventListener('click',
 function() {
   hiddenDue.className = 'wrapper';
 } )
// Evento dopo il "Click" sul tasto "NO"!!
buttonNo.addEventListener('click',
function() {

  hiddenDue.className = 'wrapper hidden';
} )

var buttonVersus = document.getElementById('js_versus');
var playerUtente = document.getElementById('js_utente');
var playerComputer = document.getElementById('js_computer');
var note = document.getElementById('js_note');
note.innerHTML = "PRONTO?????";

// Evento dopo il "Click" sul tasto "VERSUS"!!
buttonVersus.addEventListener('click',
function() {
  playerUtente.innerHTML = Math.floor(Math.random() * 6) + 1;
  playerComputer.innerHTML = Math.floor(Math.random() * 6) + 1;
  if (playerUtente.innerHTML > playerComputer.innerHTML) {
    note.innerHTML = "<h2>HAI VINTO TUU!!!</2>";
  } else if (playerUtente.innerHTML < playerComputer.innerHTML) {
    note.innerHTML = "<h2>IL COMPUTER HA VINTO!!!</2>";
  } else {
    note.innerHTML = "<h2>PARI!!!</2>";
  }
})
