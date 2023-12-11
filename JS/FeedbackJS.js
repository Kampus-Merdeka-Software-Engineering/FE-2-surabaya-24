import { postfeed } from "./API/APIFeedback.js";

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("FromFeed")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const feedbackName = document.getElementById("name").value;
      const feedbackEmail = document.getElementById("email").value;
      const feedbackComment = document.getElementById("feedback").value;
      const photoInput = document.getElementById("photo");
      const previewImage = document.getElementById("previewImage");

      const DataFeedback = {
        feedbackName,
        feedbackEmail,
        feedbackComment,
      };

      try {
        console.log("Submitting feedback...", DataFeedback);

        if (photoInput.files.length > 0) {
          const photoFile = photoInput.files[0];

          const reader = new FileReader();
          reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.style.display = "block";
          };
          reader.readAsDataURL(photoFile);
        }

        const response = await postfeed(DataFeedback);

        console.log("Feedback successfully submitted. Thank you!", response);
      } catch (error) {
        console.error("Error submitting feedback:", error);
      }
    });
});
