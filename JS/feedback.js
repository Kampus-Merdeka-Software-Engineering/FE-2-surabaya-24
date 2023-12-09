function submitForm() {
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let feedbackInput = document.getElementById("feedback");
  let previewImage = document.getElementById("preview-image");

  let name = nameInput.value;
  let email = emailInput.value;
  let feedback = feedbackInput.value;

  // Perform further actions (e.g., sending data to server) with the collected information
  // For now, we'll just show a simple alert
  alert("Feedback successfully submitted. Thank you!");

  // Clear form values after submission
  nameInput.value = "";
  emailInput.value = "";
  feedbackInput.value = "";
  previewImage.style.display = "none";
}
