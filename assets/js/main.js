
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section, .how-works_about');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1 // Ajustez ce seuil selon vos besoins
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) { // Affiche le bouton après 300px de défilement
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
