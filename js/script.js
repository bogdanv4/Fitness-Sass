var btn = document.getElementById("submit");
var ime = document.getElementById("ime");
var email = document.getElementById("email");
var telefon = document.getElementById("telefon");
var poruka = document.getElementById("poruka");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  alert(
    "Poruka je poslata: " +
      poruka.value +
      "\n" +
      ime.value +
      " " +
      email.value +
      " " +
      telefon.value
  );
});
