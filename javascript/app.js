
var carroselIndex = 0;
var carroselTimer; // variável para armazenar o temporizador

function carousel() {
  var i;
  var x = document.getElementsByClassName("carrosel");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  carroselIndex++;
  if (carroselIndex > x.length) {carroselIndex = 1} 
  x[carroselIndex - 1].style.display = "block"; 

  // reinicia o timer
  carroselTimer = setTimeout(carousel, 5000);
}

// função para iniciar o carrossel
function startCarousel() {
  carousel();
}

// função para pausar o carrossel
function pauseCarousel() {
  clearTimeout(carroselTimer);
}

// inicia o carrossel assim que a página carrega
window.onload = function() {
  startCarousel();

  // adiciona os eventos de pausa e retomada
  var container = document.querySelector(".carrosel_container");
  container.addEventListener("mouseenter", pauseCarousel);
  container.addEventListener("mouseleave", startCarousel);
};



//Botão menu

const naveMobile = document.getElementById('Menu')
const btn = document.getElementById('btn-menu')

naveMobile.addEventListener('click', animacao)

function animacao() {
  
  btn.classList.toggle('ativar')
  naveMobile.classList.toggle('abrir')

}


