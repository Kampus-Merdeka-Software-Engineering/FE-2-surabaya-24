// // Component Origin Tea
export function createCard(product) {
  const discountView = product.Discount
    ? `<div id="discount">
               <img src="Asset/TagDiscount.png" alt="">
               <h4 id="DC">Discount <br><span id="number">${product.Discount}</span><span>%</span></h4>
            </div>`
    : "";

  const card = `
        <div id=${product.CategoryName} class="tabcontent" id=${product.productId}>
            ${discountView}
            <img src="${product.ProductImg}" alt="">
            <h5 id="Green">${product.nameProduct}</h5>
            <p class="truncate">${product.DescProduct}</p>
            <a class="read" href="infoTea.html" >Read More</a>
            <h5 id="price">$${product.priceProduct}</h5>
        </div>
    `;

  return card;
}