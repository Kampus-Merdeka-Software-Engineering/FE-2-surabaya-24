function submitForm() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var feedbackInput = document.getElementById("feedback");
  var previewImage = document.getElementById("preview-image");

  var name = nameInput.value;
  var email = emailInput.value;
  var feedback = feedbackInput.value;

  // Perform further actions (e.g., sending data to server) with the collected information
  // For now, we'll just show a simple alert
  alert("Feedback successfully submitted. Thank you!");

  // Clear form values after submission
  nameInput.value = "";
  emailInput.value = "";
  feedbackInput.value = "";
  previewImage.style.display = "none";
}
