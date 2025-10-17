//carrosel
var carroselIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("carrosel");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  carroselIndex++;
  if (carroselIndex > x.length) {carroselIndex = 1} 
  x[carroselIndex-1].style.display = "block"; 
  setTimeout(carousel, 10000); 
}

