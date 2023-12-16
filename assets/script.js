const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// selection des flèches de navigation gauche et droite
const btn_left = document.querySelector (".arrow_left");
const btn_right = document.querySelector (".arrow_right");

// selection des images et des textes
let carrousel = document.querySelector ("#banner .banner-img");
let text = document.querySelector ("#banner p");

// récuperer les points
let dots = document.getElementsByClassName ("dot");

// declaration du compteur
let i=0; 

// fléche à droite
btn_right.addEventListener("click",function() {
	if(i<slides.length-1) { //avant l'arrivé à la derniere image
		i++
		updateCarrousel(i) //appel à la fonction qui change l'image
		updateDots()      // appel à la fonction qui modifie les points selectionnés
	}else if(i==slides.length -1 ){ //lorsqu'on arrive à la dernière image
		i=0;
		updateCarrousel(i);
		updateDots()
	}
})
// fléche à gauche
btn_left.addEventListener("click",function() {
	if (i==0) { // lorqu'on est sur la première image
		updateCarrousel(slides.length-1) // il affiche la dernière image
		dots[0].classList.remove("dot_selected");
        dots[slides.length-1].classList.add("dot_selected");
		i=slides.length-1;
	}else if (i<=slides.length-1){
		updateCarrousel(i-1)
		dots[i].classList.remove("dot_selected");
		dots[i - 1].classList.add("dot_selected");
		 i--;
	}
})

// fonction pour changer l'image et son text
function updateCarrousel(index) {
	carrousel.setAttribute('src', "./assets/images/slideshow/" + slides[index].image);
	text.innerHTML = slides[index].tagLine;
  }

  //fonction pouur changer les points selectionnés
function updateDots() {
	for (let dot of dots) {
		dot.classList.remove("dot_selected");
	}
	dots[i].classList.add("dot_selected");
}
