// 1. chiedere all'utente di scommetere se uscirà pari o dispari
// 2. chiediamo all'utente di inserire un numero compreso tra 1 a 5
// 3. generiamo un numero casuale da 1 a 5 (funz)
// 4. sommiamo i 2 numeri
// 5. somma pari o dispari? (funz)
// 6. stampiamo il vincitore

const userChoose = prompt("Uscirà pari o dispari?");
console.log(userChoose);

const userNum = parseInt(prompt("Inserisci qui il tuo numero da 1 a 5: "));
console.log(userNum);


let pcNum = Random();
console.log(pcNum);

let somma = pcNum + userNum;
console.log(somma);

if (paridispari(somma) == userChoose) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}


// funzioni
function Random() { 

    return Math.floor(Math.random() * 5) + 1;
}

function paridispari(risultato) {

    if (risultato % 2 === 0) {
        return "pari";
    }
    
    return "dispari";
}