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
