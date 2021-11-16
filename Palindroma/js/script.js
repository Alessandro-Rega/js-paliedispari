const parola = prompt("Inserisci una parola");

console.log(palindroma(parola));

function palindroma(parola){
    let capovolta = parola.split("");
    capovolta = capovolta.reverse();
    capovolta = capovolta.join("");
    if(capovolta == parola)return "La parola è palindroma: " + parola
    else return "La parola non è palindroma: " + parola
}