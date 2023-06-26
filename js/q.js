// Récupérer la divs de messages
var firstMess = document.getElementById("firstMess");
var secondMess = document.getElementById("secondMess");

// Récupérer le lien qui déclenche le changement de messages
var myBnt = document.getElementById("myBnt");

// Masquer le deuxième message initialement
secondMess.style.display = "none";

// Lorsque l'utilisateur clique sur le lien, masquer le premier message et afficher le second
myBnt.onclick = function(event) {
  event.preventDefault(); // Empêcher le comportement par défaut du lien
  firstMess.style.display = "none";
  secondMess.style.display = "block";
}

// Récupérer le bouton "RETOUR"
var retourBtn = document.querySelector(".retour");

// Lorsque l'utilisateur clique sur le bouton "RETOUR", fermer la modal
retourBtn.onclick = function(event) {
  event.preventDefault(); // Empêcher le comportement par défaut du lien
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}