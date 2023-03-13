// Generare un numero random da 1 a 6 per l'utente
let playerNumber = Math.floor(Math.random() * 6) + 1;
console.log(`Il giocatore ha ottenuto ${playerNumber}`);

// Generare un numero random da 1 a 6 per il computer
let computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(`Il computer ha ottenuto ${computerNumber}`);

// Confrontiamo i due numeri e determiniamo il vincitore
if (playerNumber > computerNumber) {
    console.log("Il giocatore vince!");
} else if (computerNumber > playerNumber) {
    console.log("Il computer vince!");
} else {
    console.log("È un pareggio, ma il banco vince sempre!");
}