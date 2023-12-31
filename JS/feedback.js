import { postfeed } from "./API/APIFeedback.js";

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("FromFeed")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const feedbackName = document.getElementById("name");
      const feedbackEmail = document.getElementById("email");
      const feedbackComment = document.getElementById("feedback");
      const photoInput = document.getElementById("photo");
      const previewImage = document.getElementById("previewImage");

      const DataFeedback = {
        feedbackName: feedbackName.value,
        feedbackEmail: feedbackEmail.value,
        feedbackComment: feedbackComment.value,
      };

      try {
        if (
          !DataFeedback.feedbackName ||
          !DataFeedback.feedbackEmail ||
          !DataFeedback.feedbackComment
        ) {
          alert("Please complete all fields before submitting the form.");
          return;
        }

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

        alert("Feedback successfully submitted. Thank you!");

        feedbackName.value = "";
        feedbackEmail.value = "";
        feedbackComment.value = "";
        photoInput.value = "";
        previewImage.src = "";
        previewImage.style.display = "none";

        console.log("Feedback successfully submitted. Thank you!", response);
      } catch (error) {
        console.error("Error submitting feedback:", error);
      }
    });
});
