const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

open.addEventListener("click", () => modal.classList.add("show__modal"));
close.addEventListener("click", () => modal.classList.remove("show__modal"));

window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show__modal") : false;
});