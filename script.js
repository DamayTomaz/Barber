let currentIndex = 0;
const imageSets = document.querySelectorAll('.image-set');
const totalSets = imageSets.length;

function changeImageSet() {
  // Remove a classe 'active' do conjunto atual
  imageSets[currentIndex].classList.remove('active');

  // Incrementa o índice para o próximo conjunto
  currentIndex = (currentIndex + 1) % totalSets;

  // Adiciona a classe 'active' ao próximo conjunto
  imageSets[currentIndex].classList.add('active');
}

// Troca de conjunto de imagens a cada 4 segundos (4000ms)
setInterval(changeImageSet, 4000);

//menu
function clickMenu(){
  if(menuToggle.style.display == 'block'){
    menuToggle.style.display = 'none'
  } else{
    menuToggle.style.display = 'block'
  }
}