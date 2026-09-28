document.addEventListener('DOMContentLoaded', () => {
  // LÓGICA PARA MÚLTIPLES CARRUSELES DE LA GALERÍA
  const gallerySections = document.querySelectorAll('.season-gallery-section');

  gallerySections.forEach(section => {
    const track = section.querySelector('.carousel-track');
    const nextBtn = section.querySelector('.carousel-btn.next');
    const prevBtn = section.querySelector('.carousel-btn.prev');
    const nav = section.querySelector('.carousel-nav');

    if (!track || !nextBtn || !prevBtn || !nav) return;

    const slides = Array.from(track.children);
    let currentIndex = 0;

    // Crear los puntos (dots) dinámicamente para cada carrusel
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => moveToSlide(index));
      nav.appendChild(dot);
    });

    const dots = Array.from(nav.children);

    function moveToSlide(index) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }
      track.style.transform = `translateX(-${index * 100}%)`;
      if (dots[currentIndex]) dots[currentIndex].classList.remove('active');
      if (dots[index]) dots[index].classList.add('active');
      currentIndex = index;
    }

    nextBtn.addEventListener('click', () => moveToSlide(currentIndex + 1));
    prevBtn.addEventListener('click', () => moveToSlide(currentIndex - 1));
  });

  // LÓGICA PARA LAS TABS DE LOGIN / REGISTRO (si existen en la página)
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginTab && registerTab && loginForm && registerForm) {
    loginTab.addEventListener('click', () => {
      loginTab.classList.add('active');
      registerTab.classList.remove('active');
      loginForm.classList.add('active');
      registerForm.classList.remove('active');
    });

    registerTab.addEventListener('click', () => {
      registerTab.classList.add('active');
      loginTab.classList.remove('active');
      registerForm.classList.add('active');
      loginForm.classList.remove('active');
    });
  }
});

//EFECTO MÁQUINA DE ESCRIBIR (CENTRADO) 
  const textSpan = document.getElementById('typewriter-text');

  if (textSpan) {
    const message = `"Querido lector: si hay algo que esta autora ama más que un secreto, es un escándalo a plena luz del día..."`;
    let charIndex = 0;
    const speed = 45; // Velocidad de escritura en milisegundos

    function typeWriter() {
      if (charIndex < message.length) {
        textSpan.textContent += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
      }
    }

    // Pequeño retraso inicial antes de empezar a escribir
    setTimeout(typeWriter, 500);
  }