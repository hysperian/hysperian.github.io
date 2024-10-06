const rsvForm = document.querySelector(".rsv__form");
const rsvSuccessModal = document.getElementById("rsvSuccessModal");
const rsvSuccessClose = document.getElementById("rsvSuccessClose");

// Show the subscription success modal on form submit
rsvForm.addEventListener("submit", function (e) {
    // Prevent default form submission behavior
    e.preventDefault();

    // Show the subscription success modal
    rsvSuccessModal.classList.add("show__modal");
});

// Close the subscription success modal when clicking the close button
rsvSuccessClose.addEventListener("click", () => {
    rsvSuccessModal.classList.remove("show__modal");
});

// Close the subscription success modal when clicking outside of it
window.addEventListener("click", (e) => {
    if (e.target === rsvSuccessModal) {
        rsvSuccessModal.classList.remove("show__modal");
    }
});