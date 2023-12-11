export async function postfeed(DataFeedback) {
  const response = await fetch("be-2-surabaya-24-production.up.railway.app/submitFeedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(DataFeedback),
  });
  return await response.json();
}

export async function getFeedback() {
  try {
    const response = await fetch(
      "be-2-surabaya-24-production.up.railway.app/feedback",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data } = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
