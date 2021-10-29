// 1. chiedo all'utente una parola
// 2. funzione per capire se la parola è palindroma
    // 2.1 creo una funzione e le do un nome e una variabile
    // 2.2 creo una variabile al suo interno e la sovrascrivo alla varibile iniziale 
        // 2.21 divido la parola in lettere
        // 2.22 posiziono le lettere al contrario
        // 2.23 riunisco la parola
        // 2.24 ritorno il risultato
    // 2.3 creo un ulteriore variabile in cui sovrascrivo la funzione aggiungendo la parola dell'utente
// 3. output con relativa conferma o meno
    // 3.1 se la parola inserita dall'utente rimane uguale allora è palindroma
    // 3.2 se la parola inserita dall'utente cambia allora non è palindroma


const userWord = prompt("Inserire una parola: ");
console.log(userWord);

let wordInv = invertiParola(userWord);

function invertiParola(str) {

    let strInversa = str.split('').reverse().join('');

    return strInversa;
}

if(userWord == wordInv) {
    // console.log('la parola è palindroma');
    document.getElementById("container").innerHTML = (`la parola ${userWord} è palindroma`);
    } else {
    // console.log('la parola non è palindroma');
    document.getElementById("container").innerHTML = (`la parola ${userWord} non è palindroma`);
    }