const Review = ({ review }) => {
  return (
    <div>
      <div>Review: {review.text}</div>
      <div>From: {review.user}</div>
      <div>Rating: {review.rating} </div>
    </div>
  );
};

export default Review;
