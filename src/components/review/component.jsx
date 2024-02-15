import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/review/selectors';
// import { selectUserById } from '../../redux/entities/user/selectors';

const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  console.log(review, 'review');
  // const user = useSelector((state) => selectUserById(state, review.userId));
  return (
    <div>
      <div>Review: {review?.text}</div>
      {/* <div>From: {user?.name}</div> */}
      <div>Rating: {review?.rating} </div>
    </div>
  );
};

export default Review;
