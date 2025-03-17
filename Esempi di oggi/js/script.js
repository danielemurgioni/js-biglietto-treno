let number = 4;

if (number == 4){   //se il valore è diverso non vediamo il console.log dentro [if]
    console.log("il numero è quattro");
}

console.log("sono fuori dall'if");

/* --------------------------- */

let numberBis = 4;

if (numberBis === "4"){ 
    console.log("Condizione verificata");
}

console.log("Condizione non verificata"); //perchè la tipologia della condizione di [if] è string, invece quello di [let] è number.

/* --------------------------- */


    //si posso avere piu condizioni (un'infinità)
if (condizione = 0){
    //si posso avere piu istruzioni (un'infinità); bisogna ricordarsi di mettere le parentesi graffe {}
    console.log("istruzione-y");
    console.log("instruzione-x");
}

/* --------------------------- */


/*
    il colore assegnato [=] è verde; 
    [?]il colore è rosso? Falso; 
    [allora ?] il colore è blu? Falso;
    [quindi] il colore è verde!

    il colore assegnato [=] è rosso; 
    [?]il colore è rosso? Vero;

    Le condizioni seguenti non vengono prese in carico e rimangono senza risposta!!! Ignorate.
    [allora ?] il colore è blu? 
    [quindi] il colore è verde!
*/

let color = "green";

if (color == "red"){
    console.log("il colore scelto è rosso");
}
else if(color == "blue"){ //si possono mettere multipli [else if]
    console.log("il colore scelto è blu");
}
else{  
    console.log("il colore scelto è verde");
}

// [else] non c'è bisogno di mettere una condizione Ex: else (color == "green"){...} NO!!!
// solo per [else if] ed [if] si mette una condizione.

/* --------------------------- */

/* 
    Tipologia significa, x = "4" è una string x = 4 è un number, number e string sono due diverse tipologie.

    Operatori relazionali!

    [=] assegnazione di un valore; Operatore di assegnazione.

    [==] si effettua un confronto tra i contenuti di due variabili (il loro valore); Operatore di uguaglianza.

    [===] si effettua un confronto ancor piu specifico (si controlla il valore e la tipologia); Operatore di identità.

    [!=] si effettua un confronto, per verificare se il valore è diverso;   Ex: (x = 4) quindi (x != 5) è Vero; è diverso! Operatore di diversità.

    [!==] per verificare se il valore e la tipologia è diversa; Operatore di non identità.

    [>] Maggiore di; [<] Minore di; [>=] Maggiore Uguale; [<=] Minore Uguale;
*/

/*
    Si possono unire piu condizioni tramite gli... Operatori Logici!

    Operatori Binari!
    
    [&&] AND; restituisce vero soltanto se entrambi gli operandi sono veri! Operatore AND.

    [||] OR; restituisce vero se almeno uno degli operandi è veri! Operatore OR.

    Operatore Unario!

    !(...); Cambia il valore di verità dell'operando; Operatore NOT.

    EXEMPLES:

    x=3, y=4

    AND Ex: (x < 4 && y > 5) è falso

    OR Ex: (x < 4 || y > 5) è vero

    NOT Ex: !(x > y) è vero. Sarebbe falso ma l'Operatore NOT ci dice il contrario (rendendo il risulato veritiero)

*/

let x = 4;
let y = 7;

//AND

if(x < 5 && y > 6){ // tutte due devono essere vere per passare la verificare
    console.log("Condizione verificata AND")
}
else{
    console.log("Condizione non verificata AND")
}

if(x < 5 && y > 7){ //oppure (x < 3 && y > 6) etc...
    console.log("Condizione verificata AND")
}
else{
    console.log("Condizione non verificata AND")
}

// OR

if(x < 3 || y > 6){ // solo uno deve essere vero per passare la verificare
    console.log("Condizione verificata OR")
}
else{
    console.log("Condizione non verificata OR")
}

// NOT - con condizioni booleane

let userLogged = false;

if(userLogged){ // è come scrivere if(userLogged == true) forma non contratta.
    console.log("Utente loggato");
}
else{
    console.log("Utente non loggato");
}

if(!userLogged){ // è come scrivere if(userLogged != true) forma non contratta. Con [!] sto negando che userLogged è true, quindi dico il contrario!
    console.log("Utente loggato");
}
else{
    console.log("Utente non loggato");
}