
var emailForm = prompt(email);

var email = ['pinco@aol.com', 'pallino@aol.com', 'lucky@aol.com', 'pinina@aol.com']
var mailCorretta = false;


for ( var i = 0; i < email.length; i++) {
   if (email[i] === emailForm) {
   mailCorretta = true;
 }
}

if (mailCorretta) {
  alert('Email corretta, puo accedere');
} else {
  alert('Mi dispiace, non puoi accedere');

}

// buttonProva.addEventListener('click',
// function() {
//
//
//  })
