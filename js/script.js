// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Bonus: effettuate dei controlli sui dati di input


// ? prezzo totale del biglietto

//prezzo senza sconto = kilometri * 0.21




//variabile km che si vogliono percorrere
const kilometri = parseFloat(prompt('inserisci i kilometri della tratta'));
console.log(kilometri);

//variabile età
const età = parseInt(prompt('inserisci la tua età'));
console.log(età);

//variabile prezzo intero
let prezzoIntero = kilometri * 0.21;
console.log(prezzoIntero);





