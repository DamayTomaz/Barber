const images = document.querySelectorAll('figure img');
let currentIndex = 0;

function changeImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(changeImage, 4000); // Troca a imagem a cada 4 segundos