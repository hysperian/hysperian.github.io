const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const successModal = document.getElementById("successModal");
const successClose = document.getElementById("successClose");

open.addEventListener("click", () => modal.classList.add("show__modal"));
close.addEventListener("click", () => modal.classList.remove("show__modal"));
window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show__modal") : false;
});

successClose.addEventListener("click", () => successModal.classList.remove("show__modal"));
window.addEventListener("click", (e) => {
  e.target === successModal ? successModal.classList.remove("show__modal") : false;
});

const form = document.querySelector(".modal__form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  modal.classList.remove("show__modal");
  successModal.classList.add("show__modal");
});
