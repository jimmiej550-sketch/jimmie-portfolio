document.getElementById("year").textContent = new Date().getFullYear();

const imageFrame = document.querySelector('.image-frame');

if (imageFrame) {
  const revealImage = () => {
    const rect = imageFrame.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      imageFrame.classList.add('visible');
    }
  };

  window.addEventListener('scroll', revealImage);
  window.addEventListener('load', revealImage);
}

const shapes = document.querySelectorAll('.scroll-art .shape');
const menuOverlay = document.getElementById('menuOverlay');
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  shapes.forEach(shape => {
    const speed = parseFloat(shape.dataset.speed) || 0.08;
    const offset = scrollY * speed;
    const rotate = offset * 0.08;
    shape.style.transform = `translateY(${offset}px) translateX(${offset * 0.15}px) rotate(${rotate}deg)`;
  });
});

if (menuOpen && menuOverlay && menuClose) {
  menuOpen.addEventListener('click', event => {
    event.preventDefault();
    menuOverlay.classList.add('active');
  });

  menuClose.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
  });

  menuOverlay.addEventListener('click', event => {
    if (event.target === menuOverlay) {
      menuOverlay.classList.remove('active');
    }
  });
}

