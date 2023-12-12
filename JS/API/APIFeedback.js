export async function postfeed(DataFeedback) {
  const response = await fetch("https://kind-jade-jay-gown.cyclic.app/submitFeedback", {
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
      "https://kind-jade-jay-gown.cyclic.app/feedback",
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
