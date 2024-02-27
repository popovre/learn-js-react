import Reviews from './component';
import { useGetReviewsQuery } from '../../redux/services/api';

const ReviewsContainer = ({ restaurant }) => {
  const { data: reviews, isFetching } = useGetReviewsQuery(restaurant.id);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!reviews?.length) {
    return null;
  }
  return <Reviews reviews={reviews} />;
};

export default ReviewsContainer;
