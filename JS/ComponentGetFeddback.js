export function createFeed(Order) {
  if (!Order || typeof Order !== "object" || !Order.feedbackName) {
    return "";
  }

  const cardFeed = `
    <div class="card-spill" id="feedback-form">
      <div class="card-body">
        <h6>${Order.feedbackName}</h6>
        <div class="text-card">
          <p>${Order.feedbackComment}</p>
        </div>
      </div>
    </div>
  `;

  return cardFeed;
}
