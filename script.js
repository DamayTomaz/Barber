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
function openAgenda(){
  if(formToggle.style.display == 'block'){
    formToggle.style.display = 'none'
  } else{
    formToggle.style.display = 'block'
    
  }
  
}

function clickMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open'); // Alterna a classe 'open' para abrir/fechar a sidebar
}
//data limite
const today = new Date();
    
// Formata a data atual no formato "YYYY-MM-DD"
const todayStr = today.toISOString().split("T")[0];

// Calcula a data máxima (3 dias no futuro)
const maxDate = new Date();
maxDate.setDate(today.getDate() + 3);
const maxDateStr = maxDate.toISOString().split("T")[0];

// Configura o campo de data com o limite
const dateInput = document.getElementById("data");
dateInput.min = todayStr; // Data mínima é hoje
dateInput.max = maxDateStr; // Data máxima é 3 dias no futuro