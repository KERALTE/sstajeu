var madal = document.getElementById("myMadal");
var bn = document.getElementById("myBn");
var span = document.getElementsByClassName("clase")[0];

bn.onclick = function() {
  madal.style.display = "block";
  document.body.classList.add("madal-open");
}

span.onclick = function() {
  madal.style.display = "none";
  document.body.classList.remove("madal-open");
}