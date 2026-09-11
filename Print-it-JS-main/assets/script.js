// Tableau des slides
const slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagline: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagline: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "assets/images/slideshow/slide3.jpg",
    tagline: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "assets/images/slideshow/slide4.png",
    tagline: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables globales
let imageActive = 0;
const image = document.querySelector("#slider .slider-img");
const tagline = document.querySelector("#slider .tagline");
const dotsContainer = document.querySelector(".dots");

// Fonction pour générer les dots
function generateDots() {
  dotsContainer.innerHTML = ""; // Vide le conteneur
  slides.forEach((_, index) => {  //on ignore le contenu du slide
    const dot = document.createElement("span"); // crée l'élement span
    dot.classList.add("dot"); // lui donne la classe dot
   
    dot.addEventListener("click", () => { // au click met à jour l'index du slide actif
      imageActive = index;
      updateImage(); // mise a jour image, tag et dot
    });
    dotsContainer.appendChild(dot); //insere le dot dans le conytainer
  });
}

// Met à jour l'image et les dots
function updateImage() {
  image.setAttribute("src", slides[imageActive].image);
  tagline.innerHTML = slides[imageActive].tagline;

  // Met à jour la classe dot_selected
  const dots = document.querySelectorAll(".dots .dot");
  dots.forEach((dot, index) => {
    if (index === imageActive) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Initialisation
generateDots();
updateImage();

// passe au slide suivant

  const arrowRight = document.querySelector("#slider .arrow-right");
  arrowRight.addEventListener('click', () =>  {
    imageActive++;
    if (imageActive > slides.length - 1) imageActive = 0;
    updateImage();
  });

  // passe au slide précédent

  const arrowLeft = document.querySelector("#slider .arrow-left");
  arrowLeft.addEventListener('click', () => {
    imageActive--;
    if (imageActive < 0) imageActive = slides.length - 1;
    updateImage();
  });
