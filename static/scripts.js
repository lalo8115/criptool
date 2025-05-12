document.addEventListener('DOMContentLoaded', function() {
    // Enhanced particle configuration
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { 
            value: 100, 
            density: { 
              enable: true, 
              value_area: 1000 
            } 
          },
          color: { 
            value: ["#6c5ce7", "#00cec9", "#fd79a8"] 
          },
          shape: { 
            type: ["circle", "triangle", "star"], 
            stroke: { 
              width: 0, 
              color: "#000000" 
            },
            polygon: { 
              nb_sides: 5 
            }
          },
          opacity: { 
            value: 0.7, 
            random: true, 
            anim: { 
              enable: true, 
              speed: 1, 
              opacity_min: 0.1, 
              sync: false 
            } 
          },
          size: { 
            value: 4, 
            random: true, 
            anim: { 
              enable: true, 
              speed: 2, 
              size_min: 0.1, 
              sync: false 
            } 
          },
          line_linked: { 
            enable: true, 
            distance: 150, 
            color: "#6c5ce7", 
            opacity: 0.4, 
            width: 1 
          },
          move: { 
            enable: true, 
            speed: 3, 
            direction: "none", 
            random: true, 
            straight: false, 
            out_mode: "bounce", 
            bounce: true,
            attract: { 
              enable: true, 
              rotateX: 600, 
              rotateY: 1200 
            } 
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { 
              enable: true, 
              mode: "bubble" 
            },
            onclick: { 
              enable: true, 
              mode: "push" 
            },
            resize: true
          },
          modes: {
            bubble: { 
              distance: 200, 
              size: 10, 
              duration: 2, 
              opacity: 0.8, 
              speed: 3 
            },
            push: { 
              particles_nb: 4 
            },
            repulse: { 
              distance: 100, 
              duration: 0.4 
            }
          }
        },
        retina_detect: true
      });
    }
  
    // Enhanced typing effect with colors
    const title = document.querySelector('.card-header h1');
    if (title) {
      const originalText = title.innerHTML;
      title.innerHTML = '';
      
      let i = 0;
      const colors = ['#6c5ce7', '#00cec9', '#fd79a8'];
      let colorIndex = 0;
      
      const typingEffect = setInterval(() => {
        if (i < originalText.length) {
          // Apply different colors to different parts
          if (originalText.charAt(i) === '<') {
            // Skip HTML tags
            const tagEnd = originalText.indexOf('>', i);
            title.innerHTML += originalText.substring(i, tagEnd + 1);
            i = tagEnd + 1;
          } else {
            const char = originalText.charAt(i);
            const coloredChar = `<span style="color: ${colors[colorIndex % colors.length]}">${char}</span>`;
            title.innerHTML += coloredChar;
            i++;
            colorIndex++;
          }
        } else {
          clearInterval(typingEffect);
          // Restore original HTML (with highlights) after animation
          setTimeout(() => {
            title.innerHTML = originalText;
          }, 1000);
        }
      }, 100);
    }
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 1000);
      });
    });
    
    // Add floating animation to card elements
    const cardElements = document.querySelectorAll('.card-header, .form-group, .result-container');
    cardElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
      
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100);
    });
  });
  
  function copyToClipboard() {
    const resultText = document.querySelector('.resultado').textContent;
    navigator.clipboard.writeText(resultText).then(() => {
      const button = document.querySelector('.copy-button');
      button.innerHTML = '<i class="fas fa-check"></i> Copiado!';
      button.style.backgroundColor = 'rgba(0, 206, 201, 0.2)';
      button.style.borderColor = '#00cec9';
      
      // Add confetti effect
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      document.querySelector('.result-container').appendChild(confetti);
      
      setTimeout(() => {
        button.innerHTML = '<i class="far fa-copy"></i> Copiar';
        button.style.backgroundColor = 'rgba(253, 121, 168, 0.1)';
        button.style.borderColor = '#fd79a8';
        confetti.remove();
      }, 2000);
    });
  }
