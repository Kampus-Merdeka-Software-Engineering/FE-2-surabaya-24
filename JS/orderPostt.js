// JS/feedback.js
import { createordering } from "./API/OrderAPI";

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("orderForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const OrderNameProduck = document.getElementById("namaProduct");
      const OrderNameUser = document.getElementById("namaUser");
      const OrderEmail = document.getElementById("email");
      const OrderjmlOrder = document.getElementById("jmlOrder");

      const DataOrder = {
        OrderNameProduck: OrderNameProduck.value,
        OrderNameUser: OrderNameUser.value,
        OrderEmail: OrderEmail.value,
        JumlahOrder: OrderjmlOrder.value,
      };

      try {
        // Check if the form is complete
        if (
          !DataOrder.OrderNameProduck ||
          !DataOrder.OrderNameUser ||
          !DataOrder.OrderEmail ||
          !DataOrder.JumlahOrder
        ) {
          // If not, show an alert to complete the form
          alert("Please complete all fields before submitting the form.");
          return; // Stop further execution
        }

        console.log("Submitting feedback...", DataOrder);

        const response = await createordering(DataOrder);

        // Show success message
        alert("Order successfully submitted. Thank you!");

        // Clear form fields
        OrderNameProduck.value = "";
        OrderNameUser.value = "";
        OrderEmail.value = "";
        OrderjmlOrder.value = "";

        console.log("Order successfully submitted. Thank you!", response);
      } catch (error) {
        console.error("Error submitting order:", error);
      }
    });
});
