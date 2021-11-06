// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Bonus: effettuate dei controlli sui dati di input


// ? prezzo totale del biglietto

//prezzo senza sconto = kilometri * 0.21



// variabile nome
let nomePasseggero = prompt('inserisci il tuo nome e cognome');
nomePasseggero = nomePasseggero.toLowerCase().replace(/(?<= )[^\s]|^./g, a => a.toUpperCase());
document.getElementById('nome').innerHTML = nomePasseggero



//variabile km che si vogliono percorrere
let kilometri = parseFloat(prompt('inserisci i kilometri della tratta'));
// controllo carattere
while ((isNaN(kilometri))) {
    kilometri = prompt("Carattere non consentito. Riprovare");
}
document.getElementById('km').innerHTML = kilometri + ' km'


//variabile età
let eta = parseInt(prompt('inserisci la tua età'));
// controllo carattere
while ((isNaN(eta))) {
    eta = prompt("Carattere non consentito. Riprovare");
}
document.getElementById('età').innerHTML = eta


//variabile prezzo intero
let prezzoIntero = parseFloat(kilometri * 0.21).toFixed(2);


//variabile prezzo minorenni
let scontoMinorenni = parseFloat(prezzoIntero - (prezzoIntero * 20 / 100)).toFixed(2);


//variabile prezzo0ver65
let scontoOver65 = parseFloat(prezzoIntero - (prezzoIntero * 40 / 100)).toFixed(2);


// variabile codice biglietto random
let codiceRandom = Math.floor(Math.random() * (29000 - 20000)) + 20000;
document.getElementById('codice').innerHTML = codiceRandom






//stampa del biglietto 
if (eta <= 17) {
    console.log('il prezzo del biglietto è ' + scontoMinorenni);
    document.getElementById('prezzo').innerHTML = scontoMinorenni + '€'
} else if (eta >= 65) {
    console.log('il prezzo del biglietto è ' + scontoOver65);
    document.getElementById('prezzo').innerHTML = scontoOver65 + '€'
} else {
    console.log('il prezzo del biglietto è ' + prezzoIntero);
    document.getElementById('prezzo').innerHTML = prezzoIntero + '€'
}





