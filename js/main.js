// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



var MaxNumber = 100;
var RecivedUserInputs = [];
var BombNumbers = GetBombNumbers();
var IsUserWinner = GetGameResult();

PrintResult(IsUserWinner);

function PrintResult(isWinner){
  if(!isWinner){
    alert("Mi dispiace, hai perso! Hai trovato " + RecivedUserInputs.length + " numeri su 84");
  }
  else{
    alert("Complimenti, hai vinto!");
  }
}

function GetGameResult(){
  var maxUserInput = MaxNumber - BombNumbers.length;

  for (var i = 0; RecivedUserInputs.length <= maxUserInput; i++) {
    var userInput = parseInt(prompt("Inserisci un valore:      RIMANENTI - " + (maxUserInput - i)));
    if (!isValidUserInput(userInput) || RecivedUserInputs.includes(userInput)){
      alert("Inserisci un valore numerico valido compreso tra 1 e 100");
      --i; //Serve per evitare che il contatore dei valori rimanenti da inserire cali nel caso l'utente inserisca un valore errato
    }
    else if(isBombNumber(userInput)){
      return false;
    }
    else{
      RecivedUserInputs.push(userInput);
    }
  }
  return true;
}

function isBombNumber(userInput){
  if (!BombNumbers.includes(userInput)){
    return false;
  }
  return true;
}

function isValidUserInput(userInput){
  if(isNaN(userInput) || userInput < 1 || userInput > 100){
    return false;
  }
  return true;
}

function GetBombNumbers(){
  var min = 1;
  var bombNumbers = [];

  for (var i = 0; bombNumbers.length < 16; i++) {
    var randomNumber = GetRandomNumber(min, MaxNumber);
    if(!bombNumbers.includes(randomNumber)){
      bombNumbers[i] = randomNumber;
    }
  }
  return bombNumbers;
}

function GetRandomNumber(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri!");
  } else {
    return Math.floor(Math.random()* (max - min) + min);
  }
}





// -----------------------------------------------------------------
// var bombsArray = [];
// var safesArray = [];
// var maxNumber = 100;
//
//
// bombsArray = createBombs(bombsArray, maxNumber);
//
// var punteggio = game(bombsArray, safesArray, maxNumber);
//
// console.log(createBombs(bombsArray, 100));
// console.log("Game over!");
// console.log("Il tuo punteggio e':" + punteggio);
//
//
// function game(bombsArray, safesArray, maxNumber) {
//   while (safesArray.length < maxNumber - 16) {
//     var numeroUtente = parseInt(prompt("Inserisci un numero e prova a non morire"));
//     if (!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <= 100 && !safesArray.includes(numeroUtente)) {
//      if (!bombsArray.includes(numeroUtente)) {
//       safesArray.push(numeroUtente);
//     } else {
//       return safesArray.length;
//     }
//    }
//   }
//   return safesArray.length;
// }
//
// // Ogni volta che inseriro' un elemento aumenta finche' arrivero' a 16 elementi
//
// function createBombs(array, max) {
//   while (array.length < 16) {
//     var numero = randomNumberInRange(1, 100)
//     if (!array.includes(numero)) {
//       array.push(numero);
//     }
//   }
//   return array;
// }
//
// // INSERISCO FUNZIONE RANDOMICA
//
// function randomNumberInRange(min, max) {
//   if (isNaN(min) || isNaN(max)) {
//     console.log("Non sono numeri!");
//   } else {
//     return Math.floor(Math.random()* (max - min) + min);
//   }
// }
