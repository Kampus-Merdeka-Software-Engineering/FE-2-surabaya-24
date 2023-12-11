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
        if (
          !DataOrder.OrderNameProduck ||
          !DataOrder.OrderNameUser ||
          !DataOrder.OrderEmail ||
          !DataOrder.JumlahOrder
        ) {
          alert("Please complete all fields before submitting the form.");
          return;
        }

        console.log("Submitting feedback...", DataOrder);

        const response = await createordering(DataOrder);

        alert("Order successfully submitted. Thank you!");
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
