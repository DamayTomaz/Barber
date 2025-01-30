let currentIndex = 0;
const imageSets = document.querySelectorAll('.image-set');
const totalSets = imageSets.length;

// Troca de conjunto de imagens
function changeImageSet() {
  imageSets[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalSets;
  imageSets[currentIndex].classList.add('active');
}

setInterval(changeImageSet, 4000);

// Abre e fecha o formulário
function openAgenda(){
  formToggle.style.display = formToggle.style.display === 'block' ? 'none' : 'block';
}

const btnBurguer = document.querySelector('#btn-burguer');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

// Alterna a visibilidade da sidebar
function toggleSidebar() {
  const isSidebarOpen = sidebar.classList.contains('open');
  sidebar.classList.toggle('open', !isSidebarOpen);
  overlay.classList.toggle('active', !isSidebarOpen);
}

btnBurguer.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Define limites para o campo de data
const today = new Date();
const todayStr = today.toISOString().split("T")[0];

const maxDate = new Date();
maxDate.setDate(today.getDate() + 3);
const maxDateStr = maxDate.toISOString().split("T")[0];

const dateInput = document.getElementById("data");
dateInput.min = todayStr;
dateInput.max = maxDateStr;

//Define Horario para o campo time

const selectElement = document.getElementById('time');
const startTime = 9 * 60; // 09:00 em minutos
const endTime = 18 * 60; // 18:00 em minutos
const interval = 30; // Intervalo de 30 minutos

for (let time = startTime; time <= endTime; time += interval) {
    const hour = Math.floor(time / 60);
    const minute = time % 60;
    const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    
    const option = document.createElement('option');
    option.value = formattedTime;
    option.textContent = formattedTime;

    selectElement.appendChild(option);
}