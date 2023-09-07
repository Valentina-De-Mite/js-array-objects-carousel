/*  Carosello Array di Oggetti
Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto di un array di stringhe.

Bonus 0:
Non eramamo ancora a conoscenda di molti strumenti utili, come ad esempio le funzioni. É possibile fare refactoring del codice, pulendolo e creando quanche funzione che possa rendere tutto piú leggibile e pulito?

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?
*/

// imposto un array di oggetti

let imagesArray = [
  {
    image: "cat_01",
  },

  {
    image: "cat_02",
  },
  {
    image: "cat_03",
  },
  {
    image: "cat_04",
  },
  {
    image: "cat_05",
  },
];

console.log(imagesArray);

let activeSlide = 0;
