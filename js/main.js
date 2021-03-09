// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Bonus (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50
// Consigli del giorno :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi. Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :wink: Le validazioni e i controlli possiamo farli anche in un secondo momento. Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :stuck_out_tongue:




// bomba e' il numero del computer

// contare da 1 a 100 - 16(array) perche' il computer ha generato 16 numeri.
// verifico che numero 1 e' tra uno e 100 && !isNaN (SIGNIFICA DEVE ESSERE UN NUMERO)
// verifico che non bomba se bomba TRUE, termina ciclo.
//
// Stampo punteggio

var bombArray = [];
var sefesArray = [];
var maxNumber = 100;

bombsArray = createBombs(bombsArray, 100);

console.log ()

var punteggio = game(bombsArray, safesArray, maxNumber);

console.log("Game over!");
console.log("Il tuo punteggio e':" + punteggio);

// FUNCTIONS
// Devo contare da 1 a 16 e inserire in array (numeri computer)
// // generare un numero tra 1 e 100
// // verifico che numero richiesto non e' in array
// se in arrey verifico altrimenti richiedo numero.


function game (bombsArray, safesArray, maxNumber) {
  while (safesArray.lenght < maxNumber - 16) {
    var numeroUtente = parseInt(prompt("Inserisci un numero e prova a non morire"));

    if (!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <= 100 && !safesArray.includes(numeroUtente)) {

    if (!bombsArray.includes(numeroUtente)) {
      safesArray.push(numeroUtente);
    } else {
      return safesArray.lenght;
    }
  }
  }

}


function createBombs(array, max(CHE SAREBBE 100) {

  while (array.length < 16) {
    var numero = INSERIRE FUNZIONE CHE CREA NUMERI RANDOM (1, limite, max)QUESTI SONO I PARAMETRI DELLA FUNZIONE NUOVA

    if (!array.includes(numero)) se non include numero lo faccio includere quindi faccio {
      array.push(numero);
    }
  }

}

// INSERISCO FUNZIONE RANDOMICA QUI sotto
