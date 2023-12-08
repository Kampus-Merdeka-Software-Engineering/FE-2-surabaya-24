// // Connecting FE BE
import { getProduct } from "./API/products.js";
import { createCard } from "./script.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const productData = await getProduct();

    const cardContainer = document.getElementById("OriginTeaMenu");
    const SweeteaCard = document.getElementById("SweeTeaMenu");
    const dessertsGrid = document.getElementById("grid");

    if (productData.length > 0) {
      let cards = "";

      for (let i = 0; i < 16; i++) {
        if (productData[i].CategoryName == "Origin Tea")
          cards += createCard(productData[i]);
      }

      cardContainer.innerHTML = cards;

      console.log("product", productData[0].nameProduct);
    }
    if (productData.length > 0) {
      let cards = "";

      for (let i = 0; i < 16; i++) {
        if (productData[i].CategoryName == "Sweet Tea")
          cards += createCard(productData[i]);
      }

      SweeteaCard.innerHTML = cards;
    } else {
      console.error("Data Product tidak ditemukan.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});



