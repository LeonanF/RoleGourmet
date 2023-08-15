const navbar = document.querySelector('header');

// Adiciona um ouvinte de evento para o evento "scroll" na janela
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.add('animar')
  } else {
    navbar.classList.remove('animar')
  }
});

const slider = document.querySelector('.slider')
const navButtons = document.querySelectorAll('.slider-button')
let currentIndex = 0

window.addEventListener('load', startSlider);

navButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentIndex = index
    resetInterval()
    showImage()
  });
});

function startSlider() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex+1)%3
    showImage()
  }, 2000)
}

function resetInterval(){
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % 3
    showImage()
  }, 2000)
}

function showImage() {
  slider.style.backgroundImage = `url(/assets/img-main-${currentIndex+1}.jpg)`
  navButtons.forEach((button, index) => {
    if (index === currentIndex) {
      button.classList.add('active')
    } else {
      button.classList.remove('active')
    }
  })
}