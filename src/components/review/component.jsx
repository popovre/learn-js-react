const Review = ({ review, user }) => {
  return (
    <div>
      <div>Review: {review?.text}</div>
      <div>From: {user?.name}</div>
      <div>Rating: {review?.rating} </div>
    </div>
  );
};

export default Review;
