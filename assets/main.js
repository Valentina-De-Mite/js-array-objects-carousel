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
    photo: "cat_01.jpg",
  },

  {
    photo: "cat_02.jpg",
  },
  {
    photo: "cat_03.jpg",
  },
  {
    photo: "cat_04.jpg",
  },
  {
    photo: "cat_05.jpg",
  },
];

// console.log(imagesArray);

// seleziono gli elementi della DOM
const imagesEl = document.querySelector(".sliders");
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");
let activeSlides = 0;
// effettuo un loop dell'array
imagesArray.forEach((element) => {
  console.log(element.photo);

  const markup = `<img class="rounded shadow" src="./assets/img/${element.photo}" alt="" srcset="">`;

  document.getElementById("markup").insertAdjacentHTML("beforeend", markup);
  // creo la costante activeSlide

  imagesEl.firstElementChild.classList.add("active");
  // aggiungo l'eventListener sul click
});

nextEl.addEventListener("click", function () {
  let activeEl = imagesEl.childNodes[activeSlides];
  console.log(imagesEl.childNodes);
  activeEl.classList.remove("active");
  // faccio progredire le slides e metto un controllo
  if (activeSlides === imagesArray.length - 1) {
    activeSlides = 0;
  } else {
    activeSlides += 1;
  }
  console.log(activeSlides);
  let newActiveEl = imagesEl.childNodes[activeSlides];
  newActiveEl.classList.add("active");
  console.log(newActiveEl);
});

prevEl.addEventListener("click", function () {
  let activeEl = imagesEl.childNodes[activeSlides];
  console.log(imagesEl.childNodes);
  activeEl.classList.remove("active");
  // faccio progredire le slides e metto un controllo
  if (activeSlides === 0) {
    activeSlides = imagesArray.length - 1;
  } else {
    activeSlides -= 1;
  }
  console.log(activeSlides);
  let newActiveEl = imagesEl.childNodes[activeSlides];
  newActiveEl.classList.add("active");
  console.log(newActiveEl);
});
