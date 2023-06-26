window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
  
    var scrollLimit = 1100; // Hauteur limite de défilement en pixels
  
    if (scrollPosition > scrollLimit) {
      // Bloquer le défilement vers le bas
      window.scrollTo(0, scrollLimit);
    }
  });
  