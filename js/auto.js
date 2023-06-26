// Fonction pour animer le défilement vers le bas
function scrollToBottom() {
    const targetElement = document.documentElement;
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
  
  // Appel de la fonction au chargement de la page
  window.onload = scrollToBottom;