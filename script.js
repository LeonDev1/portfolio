const jsConfetti = new JSConfetti();

function confetti() {
  jsConfetti.addConfetti();
}

document
  .querySelector(".header-text-block a")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("projekte").scrollIntoView({ behavior: "smooth" });
  });

document.querySelector(".signature a").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
