export async function getDetailProduct() {
  const response = await fetch("http://localhost:3000/detail/:productId", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const { data } = await response.json();
  return data;
}

export async function createordering(order) {
  const response = await fetch("http://localhost:3000/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
    credentials: "include",
  });
  return await response.json();
}
