import { getFeedback } from "./API/APIFeedback.js";
import { createFeed } from "./ComponentGetFeddback.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const DataFeed = await getFeedback();

    const feedbacksCard = document.getElementById("feedback-form");

    if (DataFeed.length > 0) {
      let feedbacksCards = "";

      for (let i = 0; i < 3; i++) {
        feedbacksCards += createFeed(DataFeed[i]);
      }

      feedbacksCard.innerHTML = feedbacksCards;

      console.log("Feedback", DataFeed[0].feedbackName);
    }else {
      console.error("No feedback data found or an error occurred.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
