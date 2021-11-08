// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Bonus: effettuate dei controlli sui dati di input


//input: 
// 1) km da percorrere
// 2) età del passeggero

// operazioni:
// 1) calcolo del prezzo base: 0.21 x km da percorrere
// 2) calcolo scontistica: 
//    a) minorenne - sconto del 20%
//    b) over 65 - sconto del 40%

// output
// Prezzo finale espresso in decimale con la precisione di 2 cifre




// variabile nome
let nomePasseggero = prompt('inserisci il tuo nome e cognome');
nomePasseggero = nomePasseggero.toLowerCase().replace(/(?<= )[^\s]|^./g, a => a.toUpperCase());


//variabile km che si vogliono percorrere
let kilometri = parseFloat(prompt('inserisci i kilometri della tratta'));


//variabile età
let eta = parseInt(prompt('inserisci la tua età'));


//variabile prezzo intero
let prezzo = parseFloat(kilometri * 0.21).toFixed(2);


// variabile codice biglietto random
let codiceRandom = Math.floor(Math.random() * (29000 - 20000)) + 20000;





// controllo dati
while ((isNaN(kilometri))) {
    kilometri = prompt("Carattere non consentito. Riprovare");
}
while ((isNaN(eta))) {
    eta = prompt("Carattere non consentito. Riprovare");
}




//stampa del biglietto 
if (eta < 18) {
    prezzo *= 0.8;
} else if (eta >= 65) {
    prezzo *= 0.6;
} 




// output
document.getElementById('nome').innerHTML = nomePasseggero
document.getElementById('km').innerHTML = kilometri + ' km'
document.getElementById('età').innerHTML = eta
document.getElementById('codice').innerHTML = codiceRandom

document.getElementById('prezzo').innerHTML = prezzo + '€'
