import { Order } from "./order";
import { createordering as createOrderingAPI } from "./POST";

export function createordering(order) {
  const cardOrder = `
    <section id="formOrder">
      <div class="container">
        <form id="orderForm">
          <label for="namaProduct">${order.NamaProduct}</label>
          <input type="text" id="namaProduct" name="namaProduct" required>

          <label for="namaUser">${order.NamaUser}</label>
          <input type="text" id="namaUser" name="namaUser" required>

          <label for="email">${order.Email}</label>
          <input type="email" id="email" name="email" required>

          <label for="jmlOrder">${order.JmlOrder}</label>
          <input type="number" id="jmlOrder" name="jmlOrder" required>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>`;

  return order;
}

document.getElementById("orderForm").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const namaProduct = document.getElementById("namaProduct").value;
  const namaUser = document.getElementById("namaUser").value;
  const email = document.getElementById("email").value;
  const jmlOrder = document.getElementById("jmlOrder").value;

  Order.create({
    namaProduct,
    namaUser,
    email,
    jmlOrder,
  })
    .then((response) => {
      console.log(response);
      alert("Order berhasil dikirim");
    })
    .catch((error) => {
      console.log(error);
      alert("Terjadi kesalahan saat mengirim order");
    });
}
