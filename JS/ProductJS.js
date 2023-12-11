
// feedbackForm.js
import { getProduct } from "./API/products.js";
import { createCard } from "./script.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const productData = await getProduct();

    const cardContainer = document.getElementById("OriginTeaMenu");
    const SweeteaCard = document.getElementById("SweeTeaMenu");
    const TisaneCard = document.getElementById("TisaneMenu");

    if (productData.length > 0) {
      let originTeaCards = "";
      let sweetTeaCards = "";
      let tisaneCards = "";

      for (let i = 0; i < 23; i++) {
        if (productData[i].CategoryName == "Origin Tea")
          originTeaCards += createCard(productData[i]);
        else if (productData[i].CategoryName == "Sweet Tea")
          sweetTeaCards += createCard(productData[i]);
        else if (productData[i].CategoryName == "Tisane")
          tisaneCards += createCard(productData[i]);
      }

      cardContainer.innerHTML = originTeaCards;
      SweeteaCard.innerHTML = sweetTeaCards;
      TisaneCard.innerHTML = tisaneCards;

      console.log("product", productData[0].nameProduct);
    } else {
      console.error("Data Product tidak ditemukan.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
