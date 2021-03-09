// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Bonus (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50




// FUNCTIONS
// Devo contare da 1 a 16 e inserire in array (numeri computer)
// // generare un numero tra 1 e 100
// // verifico che numero richiesto non e' in array
// se in array verifico altrimenti richiedo numero.
// contare da 1 a 100 - 16(array) perche' il computer ha generato 16 numeri.
// verifico che numero 1 e' tra uno e 100
// verifico che non bomba se bomba TRUE, termina ciclo.
// Stampo punteggio

var bombsArray = [];
var safesArray = [];
var maxNumber = 100;


bombsArray = createBombs(bombsArray, maxNumber);

var punteggio = game(bombsArray, safesArray, maxNumber);

console.log(createBombs(bombsArray, 100));
console.log("Game over!");
console.log("Il tuo punteggio e':" + punteggio);


function game(bombsArray, safesArray, maxNumber) {
  while (safesArray.length < maxNumber - 16) {
    var numeroUtente = parseInt(prompt("Inserisci un numero e prova a non morire"));
    if (!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <= 100 && !safesArray.includes(numeroUtente)) {
     if (!bombsArray.includes(numeroUtente)) {
      safesArray.push(numeroUtente);
    } else {
      return safesArray.length;
    }
   }
  }
  return safesArray.length;
}

// Ogni volta che inseriro' un elemento aumenta finche' arrivero' a 16 elementi

function createBombs(array, max) {
  while (array.length < 16) {
    var numero = randomNumberInRange(1, 100)
    if (!array.includes(numero)) {
      array.push(numero);
    }
  }
  return array;
}

// INSERISCO FUNZIONE RANDOMICA

function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri!");
  } else {
    return Math.floor(Math.random()* (max - min) + min);
  }
}
