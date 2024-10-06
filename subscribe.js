const subscribeForm = document.querySelector(".modal__subscribe");
const subscribeSuccessModal = document.getElementById("subscribeSuccessModal");
const subscribeSuccessClose = document.getElementById("subscribeSuccessClose");

// Show the subscription success modal on form submit
subscribeForm.addEventListener("submit", function (e) {
    // Prevent default form submission behavior
    e.preventDefault();

    // Show the subscription success modal
    subscribeSuccessModal.classList.add("show__modal");
});

// Close the subscription success modal when clicking the close button
subscribeSuccessClose.addEventListener("click", () => {
    subscribeSuccessModal.classList.remove("show__modal");
});

// Close the subscription success modal when clicking outside of it
window.addEventListener("click", (e) => {
    if (e.target === subscribeSuccessModal) {
        subscribeSuccessModal.classList.remove("show__modal");
    }
});