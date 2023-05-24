
const formulaireCard = document.querySelector(".formulaire-card");
formulaireCard.addEventListener("submit", function (event) {


  var premierS = document.getElementById("name-id");
  var premierSValue = premierS.value;

  console.log("La valeur de s1 est:" + premierSValue);
  event.preventDefault();

})


