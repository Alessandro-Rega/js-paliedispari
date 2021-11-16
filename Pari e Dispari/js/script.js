let scelta = "";
while(scelta != "pari" && scelta != "dispari"){
    scelta = prompt("Pari o Dispari ?");
}

let numero = 0;
while(numero <= 0 || numero >= 6){
    numero = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

const numeroPC = numeroRandom();

console.log("Scelta: " + scelta + " - " + "Utente: " + numero + " - " + "Computer: " + numeroPC + " → " + vincitore(scelta, numero, numeroPC));



// funzioni ↓

function numeroRandom(){
    return Math.floor(Math.random() * (6 - 1) + 1);
}

function vincitore(scelta, numero, numeroPC){
    const somma = numero + numeroPC;
    if(somma % 2 == 0 && scelta == "pari")return "Hai vinto" + somma;
    else if(somma % 2 != 0 && scelta == "dispari")return "Hai vinto" + somma
    else return "Hai perso " + somma;
}