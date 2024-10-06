const contactForm = document.querySelector(".contact__form");
const contactSuccessModal = document.getElementById("contactSuccessModal");
const contactSuccessClose = document.getElementById("contactSuccessClose");

   // Handle form submission
   if (contactForm) {
       contactForm.addEventListener("submit", function (e) {
           e.preventDefault(); // Prevent the form from submitting and refreshing the page

           // Show the success modal
           contactSuccessModal.classList.add("show__modal");
       });
   }

   // Close the modal when the close button is clicked
   if (contactSuccessClose) {
        contactSuccessClose.addEventListener("click", () => {
        contactSuccessModal.classList.remove("show__modal");
       });
   }

   // Close modal when clicking outside of it
   window.addEventListener("click", (e) => {
       if (e.target === contactSuccessModal) {
        contactSuccessModal.classList.remove("show__modal");
       }
   });