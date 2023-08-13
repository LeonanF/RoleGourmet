const navbar = document.querySelector('header');

// Adiciona um ouvinte de evento para o evento "scroll" na janela
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.add('animar');
  } else {
    navbar.classList.remove('animar');
  }
});

const slider = document.querySelector('.slider');
const navButtons = document.querySelectorAll('.slider-button');
let currentIndex = 0;

window.addEventListener('load', startSlider);

navButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentIndex = index;
    showImage();
  });
});

function startSlider() {
  setInterval(() => {
    if(currentIndex==2){
      currentIndex=-1;
    }
    showImage();
  }, 2000);
}

function showImage() {
  currentIndex++;
  slider.style.backgroundImage = `url(/assets/img-main-${currentIndex+1}.jpg)`
}