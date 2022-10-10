/*
TRACCIA
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
La condizione non funziona? controlliamo il loro ordine.*/

//alert('ciao')

//TIPS
//per dividere un numero potrei usare % con la condizione if

//Scrivi un programma che stampi in console i numeri da 1 a 100
//comincio realizzando il loop col ciclo for
for (let i = 1; i <= 100; i++) {
    //console.log(i);

    if ((i % 5 == 0) & (i % 3 == 0)) {
        //Se il numero di quelli stampati è sia multiplo di 3 che di 5 stampi “FizzBuzz”.
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        //Se il numero di quelli stampati è divisibile per 3 stampa “Fizz” al posto del numero
        //il numero divisibile per 3 deve dare come resto 0
        console.log('Fizz');
    } else if (i % 5 == 0) {
        //Se il numero di quelli stampati è divisibile per 5 stampa “Buzz” al posto del numero
        //il numero divisibile per 5 deve dare come resto 0
        console.log('Buzz');
    } else {
        console.log(i);
    }
}








