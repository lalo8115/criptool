document.addEventListener('DOMContentLoaded', function() {
    // Inicializar partículas
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#a29bfe" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#6c5ce7", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
          }
        }
      });
    }
  
    // Efecto de escritura para el título (opcional)
    const title = document.querySelector('.card-header h1');
    if (title) {
      const text = title.textContent;
      title.textContent = '';
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          title.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typingEffect);
        }
      }, 100);
    }
  });
  
  function copyToClipboard() {
    const resultText = document.querySelector('.resultado').textContent;
    navigator.clipboard.writeText(resultText).then(() => {
      const button = document.querySelector('.copy-button');
      button.innerHTML = '<i class="fas fa-check"></i> Copiado!';
      setTimeout(() => {
        button.innerHTML = '<i class="far fa-copy"></i> Copiar';
      }, 2000);
    });
  }