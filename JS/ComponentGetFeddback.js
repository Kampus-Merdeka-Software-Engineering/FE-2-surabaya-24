export function createFeed(Order) {
  const cardFeed = `
        <div class="card-spill" id="feedback-form">
            <div class="card-body">
                <img src="${Order.feedbackImg}" alt="people1" />
                <h6>${Order.feedbackName}</h6>
                <div class="text-card">
                  <p>
                  ${Order.feedbackComment}
                  </p>
                </div>
            </div>
        </div>
    `;

  return cardFeed;
}
