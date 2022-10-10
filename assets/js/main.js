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
/* BONUS 1:
        Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare. */
/* BONUS 2:
        Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. */

//alert('ciao')

//TIPS
//per dividere un numero potrei usare % con la condizione if

//Scrivi un programma che stampi in console i numeri da 1 a 100
//comincio realizzando il loop col ciclo for
for (let i = 1; i <= 100; i++) {
    //console.log(i);

    /* BONUS1 */
    //catturo l'elemento body del DOM nella variabile bodyEl
    const numberBoxEl = document.querySelector('.number_box');
    //creo un elemento container nel DOM attraverso il metodo createElement
    const containerEl = document.createElement('container');
    //console.log(containerEl);
    const pEl = document.createElement('p');

    numberBoxEl.append(containerEl);
    //aggiungo al DOM un p che mostri il numero/scritta, utilizzando append
    containerEl.append(pEl);
    //console.log(bodyEl);
    /* /BONUS1 */

    if ((i % 5 == 0) && (i % 3 == 0)) {
        //Se il numero di quelli stampati è sia multiplo di 3 che di 5 stampi “FizzBuzz”.
        console.log('FizzBuzz');
        pEl.append('fizz/buzz');//BONUS1
        containerEl.style = 'background-color:green';//BONUS2

    } else if (i % 3 == 0) {
        //Se il numero di quelli stampati è divisibile per 3 stampa “Fizz” al posto del numero
        //il numero divisibile per 3 deve dare come resto 0
        console.log('Fizz');
        pEl.append('fizz');//BONUS1
        containerEl.style = 'background-color:blue';//BONUS2

    } else if (i % 5 == 0) {
        //Se il numero di quelli stampati è divisibile per 5 stampa “Buzz” al posto del numero
        //il numero divisibile per 5 deve dare come resto 0
        console.log('Buzz');
        pEl.append('buzz');//BONUS1
        containerEl.style = 'background-color:red';//BONUS2

    } else {
        //stampo i restanti numeri normalmente
        console.log(i);
        pEl.append(i);//BONUS1
        containerEl.style = 'background-color:pink';//BONUS2
    }
}











