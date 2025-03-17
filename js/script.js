// permetto l'inserimento di due valori (età e chilometri percorso) da parte dell'utente
let userKm = prompt("Inserisci il numero di chilometri che devi percorerre");
let userAge = prompt("Inserisci la tua età");

console.log(userKm+"km "+"Age:"+userAge);

// calcolo il costo del biglietto per chilometro

let ticketCost = 0.21 * userKm;

console.log(ticketCost);

// se l'utente è minorenne o oltre i 65 anni avra uno sconto, altrimenti paga il costo totale del biglietto

let underAge = 17;
let overAge = 65;

let ticketDiscount;

if(userAge <= underAge){
    ticketDiscount = ticketCost * 0.8;
}
else if(userAge > overAge){
    ticketDiscount = ticketCost * 0.6;
}
else{
    ticketDiscount = ticketCost;
}

console.log(ticketDiscount);