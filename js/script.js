// permetto l'inserimento di due valori (età e chilometri percorso) da parte dell'utente
let userKm = prompt("Inserisci il numero di chilometri che devi percorerre");
let userAge = prompt("Inserisci la tua età")

console.log(userKm+"km "+"Age:"+userAge)

// calcolo il costo del biglietto per chilometro

let ticketCost = 0.21 * userKm

console.log(ticketCost)