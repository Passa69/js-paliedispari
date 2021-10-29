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

function Random(pcRand) { 

    pcRand = Math.floor(Math.random() * 5) + 1

    return pcRand;
}
console.log(pcNum);

let finish = paridispari();

function paridispari(risultato) {

    let somma = pcNum + userNum;
    console.log(somma);

    if (somma % 2 === 0) {
        risultato = console.log("Hai vinto");
    } else {
        risultato = console.log("Hai perso");
    }
}