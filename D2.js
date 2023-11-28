/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* 
let num1 = 9;
let num2 = 21;
let max = Math.max(num1, num2);
console.log(max)
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* 
let x = 10;

if (x !== 5) {
  console.log("not equal");
}
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/*
let x = 125;

if (x % 5 === 0) {
  console.log("divibile per 5");
} else {
  console.log("non divisibile per 5");
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* 
let x = 10;
let y = 2;

if (x === 8) {
  console.log("x equals to 8");
}
if (y === 8) {
  console.log("y equals to 8");
}

if (x + y === 8) {
  console.log("x+y equals to 8");
}

if (x - y === 8) {
  console.log("x-y equals to 8");
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* 
let totalShoppingCart = 25;

if (totalShoppingCart > 50) {
  console.log("Spedizione gratuita");
} else {
  console.log("Spedizione 10");
}
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* 
let totalShoppingCart = 1000;
let toalWithDiscount = totalShoppingCart * 0.2;

if (toalWithDiscount > 50) {
  console.log("Spedizione gratuita");
} else {
  console.log("Spedizione 10");
}
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* 
let x = 10;
let y = 5;
let z = 15;

if (x > y && x > z) {
  if (y > z) {
    console.log(x, y, z);
  }
  if (z > y) {
    console.log(x, y, z);
  } else if (y > x && y > z) {
    if (x > z) {
      console.log(y, x, z);
    }
    if (z > x) {
      console.log(y, z, x);
    }
  } else if (z > y && z > x) {
    if (x > y) {
      console.log(z, x, y);
    }
    if (y > x) {
      console.log(z, y, x);
    }
  }
}


// separando gli if funziona

let x = 10;
let y = 25;
let z = 15;

if (x > y && x > z) {
  if (y > z) {
    console.log(x, y, z);
  }
  if (z > y) {
    console.log(x, y, z);
  }
}
if (y > x && y > z) {
  if (x > z) {
    console.log(y, x, z);
  }
  if (z > x) {
    console.log(y, z, x);
  }
}
if (z > y && z > x) {
  if (x > y) {
    console.log(z, x, y);
  }
  if (y > x) {
    console.log(z, y, x);
  }
}
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*
let x = "apple";
console.log(typeof x);
*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* 
let x = 11;

if (x % 2 === 0) {
  console.log("Pari");
} else {
  console.log("Dispari");
}
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

*/

/* 
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
Object.assign(me, { city: "Toronto" });
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/*
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
Object.assign(me, { city: "Toronto" });

delete me.lastName
console.log(me);
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
delete me.skills[2];
console.log(me);
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* 
const numbers = [];
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* 
const numbers = [];
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

numbers.splice(9, 1, 100);
console.log(numbers);
*/
