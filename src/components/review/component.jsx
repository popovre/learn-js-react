import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/review/selectors';
import { selectUserById } from '../../redux/entities/user/selectors';

const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  return (
    <div>
      <div>Review: {review?.text}</div>
      <div>From: {review?.userId}</div>
      <div>Rating: {review?.rating} </div>
    </div>
  );
};

export default Review;
