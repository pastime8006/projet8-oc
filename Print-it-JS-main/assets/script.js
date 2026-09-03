

let slides = [
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

let imageActive = 0;

let image = document.querySelector("#slider .slider-img");
let tagline = document.querySelector("#slider .tagline");
updateImage();

let arrowRight = document.querySelector("#slider .arrow-right");
arrowRight.onclick = function (e) {
  imageActive++;
  if (imageActive > slides.length - 1) imageActive = 0;
  updateImage();
};

let arrowLeft = document.querySelector("#slider .arrow-left");
arrowLeft.onclick = function (e) {
  imageActive--;
  if (imageActive < 0) imageActive = slides.length - 1;
  updateImage();
};

function updateImage() {
  image.setAttribute("src", slides[imageActive].image);
  tagline.innerHTML = slides[imageActive].tagline;
}
