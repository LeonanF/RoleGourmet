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
const images = document.querySelectorAll('.slider img');
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
    currentIndex++;
    if (currentIndex === images.length) {
      currentIndex = 0;
    }
    showImage();
  }, 6000);
}

function showImage() {
  images.forEach(img => img.classList.remove('active'));
  images[currentIndex].classList.add('active');
  navButtons.forEach(button => button.classList.remove('active'));
  navButtons[currentIndex].classList.add('active');
}
