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
const btn_left = document.querySelector (".arrow_left");
console.log(btn_left);
const btn_right = document.querySelector ("arrow_right");
console.log(btn_right);
let carrousel = document.querySelector ("#banner .banner-img");
let text = document.querySelector ("#banner p");
let dots = document.getElementsByClassName ("dot");
let i=0;
btn_right.addEventListener("click",function() {
	if(i<slides.length) {
		i++
		carrousel.setAttribute('src',"./assets/images/slideshow/" + slides[i].image);
		text.innerHTML=slides[i].tagLine;
		dots[i-1].classList.remove("dot_selected");
		dots[i].classList.add("dot_selected");
	}else if (i>slides.length) {
		carrousel.setAttribute('src',"./assets/images/slideshow/" + slides[0].image);
		text.innerHTML=slides[0].tagLine;
		dots[0].classList.add("dot_selected");
	}
})
btn_left.addEventListener("click",function() {
	if (i==0) {
		carrousel.setAttribute('src',"./assets/images/slideshow/" + slides[slides.length].image);
		text.innerHTML=slides[slides.length].tagLine;
		dots[0].classList.remove("dot_selected");
		dots[slides.length].classList.add("dot_selected");
		i=slides.length;
	}else if (i<=slides.length-1){
		carrousel.setAttribute('src',"./assets/images/slideshow/" + slides[i-1].image);
		text.innerHTML=slides[i-1].tagLine;
		dots[i].classList.remove("dot_selected");
		 dots[i-1].classList.add("dot_selected");
		 i--;
	}
})