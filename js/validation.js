// Récupérer les éléments du DOM
var emailInput = document.getElementById("emailInput");
var myBnt = document.getElementById("myBnt");
var isValidEmail = false;

// Fonction pour valider l'adresse e-mail
function validerEmail() {
  var email = emailInput.value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isValidEmail = regex.test(email);

  if (isValidEmail) {
    myBnt.disabled = false; // Activer le bouton si l'adresse est valide
  } else {
    myBnt.disabled = true; // Désactiver le bouton si l'adresse est invalide
  }
}

// Écouter l'événement de perte de focus de l'input
emailInput.addEventListener("blur", validerEmail);
