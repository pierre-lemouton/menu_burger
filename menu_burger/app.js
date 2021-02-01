/*=== Au click du boutton burger ===*/
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active"); // au click sur burger, burger devient une croix par l'ajout de la classe active
  nav.classList.toggle("active"); // au click sur burger, nav apparaît par l'ajout de la classe active
  overlay.classList.toggle("active"); // au click sur burger, burger-overlay apparaît par l'ajout de la classe active
});
