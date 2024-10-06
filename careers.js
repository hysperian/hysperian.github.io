 const careerForm = document.querySelector(".careers__form");
 const careerSuccessModal = document.getElementById("careerSuccessModal");
 const careerSuccessClose = document.getElementById("careerSuccessClose");

    // Handle form submission
    if (careerForm) {
        careerForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the form from submitting and refreshing the page

            // Show the success modal
            careerSuccessModal.classList.add("show__modal");
        });
    }

    // Close the modal when the close button is clicked
    if (careerSuccessClose) {
        careerSuccessClose.addEventListener("click", () => {
            careerSuccessModal.classList.remove("show__modal");
        });
    }

    // Close modal when clicking outside of it
    window.addEventListener("click", (e) => {
        if (e.target === careerSuccessModal) {
            careerSuccessModal.classList.remove("show__modal");
        }
    });