// Creare una array contenente le mail autorizate per l'accesso
const allowedEmails = ["email1@example.com", "email2@example.com", "email3@example.com", "email4@example.com", "email5@example.com"];
console.log(allowedEmails);
// Chiedere all'utente la sua mail
const userEmail = prompt('Ciao utente! Per continuare inserisci la tua email')
console.log(userEmail);
// Controllare se la mail è presente nell'array 
if (allowedEmails.includes(userEmail)) {
    // SE è presente
    //      allora stampo "accesso consentito"  
    console.log('Accesso consentito');
} else {
    // Altrimenti
    //      stampo "accesso negato"
    console.log('Accesso negato')
}