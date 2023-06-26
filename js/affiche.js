function scrollToTop() {
  window.scrollTo(0, 0);
}

window.addEventListener('load', scrollToTop);


function partde(event) {
    event.preventDefault();
    var deux = document.getElementById("partde");
    deux.classList.add("visible-element");
    deux.classList.remove("partde");
    
    // Appel de la fonction scrollToBottom ici
    scrollToBottom();
  }

  function parttr(event) {
    event.preventDefault();
    var trois = document.getElementById("parttr");
    trois.classList.add("visible-element");
    trois.classList.remove("parttr");
    
    // Appel de la fonction scrollToBottom ici
    scrollToBottom();
  }

  function partqu(event) {
    event.preventDefault();
    var partqu = document.getElementById("partqu");
    var HP = document.getElementById("HP");

    partqu.classList.remove("partqu")
    HP.remove()
    
    // Appel de la fonction scrollToBottom ici
    scrollToBottom();
  }
  function scrollToBottom() {
    const targetElement = document.documentElement;
    targetElement.scrollBy({ behavior: 'smooth', top: 743 });
  }