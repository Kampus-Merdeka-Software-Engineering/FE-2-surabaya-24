import { getFeedback } from "./API/APIFeedback.js";
import { createFeed } from "./ComponentGetFeddback.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const DataFeed = await getFeedback();

    const feedbacksCard = document.getElementById("feedback-form");
    const feedbacksCard1 = document.getElementById("feedbacks-container2");
    const feedbacksCard2 = document.getElementById("feedbacks-container3");

    if (DataFeed.length > 0) {
      let feedbacksCards = "";

      for (let i = 0; i < 9; i++) {
        feedbacksCards += createFeed(DataFeed[i]);
      }

      feedbacksCard.innerHTML = feedbacksCards;

      console.log("Feedback", DataFeed[0].feedbackName);
    }

    if (DataFeed.length > 0) {
      let feedbacksCards1 = "";

      for (let i = 0; i < 9; i++) {
        feedbacksCards1 += createFeed(DataFeed[i]);
      }

      feedbacksCard1.innerHTML = feedbacksCards1;

      console.log("Feedback", DataFeed[0].feedbackName);
    }

    if (DataFeed.length > 0) {
      let feedbacksCards2 = "";

      for (let i = 0; i < 3; i++) {
        feedbacksCards2 += createFeed(DataFeed[i]);
      }

      feedbacksCard2.innerHTML = feedbacksCards2;

      console.log("Feedback", DataFeed[0].feedbackName);
    } else {
      console.error("No feedback data found or an error occurred.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
