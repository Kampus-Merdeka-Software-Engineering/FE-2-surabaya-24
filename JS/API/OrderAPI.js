export async function postOrder(DataOrder) {
  const response = await fetch("kind-jade-jay-gownCyclicDB/submitOrder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(DataOrder),
  });
  return await response.json();
}

export async function getOrderDetail() {
  try {
    const response = await fetch("kind-jade-jay-gownCyclicDB/OrderGet", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
