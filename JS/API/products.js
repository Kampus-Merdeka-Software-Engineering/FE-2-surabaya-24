export async function getProduct() {
  try {
    const response = await fetch("https://kind-jade-jay-gown.cyclic.app/product", {
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

