esercizio di oggi: Biglietto del treno
cartella/repo js-biglietto-treno

Numero di push minimo: 6

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

scomposizione in sotto-problemi:

[PROMPT] Prima Variabile - dove CHIEDIAMO all'utente il NUMERO KM che vuole percorrere
[PROMPT] Seconda Variabile - dove CHIEDIAMO all'utente la sua ETA'
[MULTIPLY] Terza Variabile - dove CALCOLO il prezzo del BIGLIETTO per ogni KM che l'utente vuole percorrere (0.21 € al km)
[IF] Quarta Variabile - se l'utente è minorenne (ETA' < 18) ha 20% di sconto del valore del biglietto
[ELSE-IF] Quinta Variabile - altrimenti se l'utente è oltre i 65 (ETA' > 65) ha 40% di sconto del valore del biglietto
[ELSE] Sesta Variabile - altrimenti paga il normale costo del biglietto.