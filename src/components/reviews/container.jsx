import Reviews from './component';
import { useGetReviewsQuery } from '../../redux/services/api';
import { useParams } from 'react-router-dom';

const ReviewsContainer = () => {
  const { restaurantId } = useParams();
  const { data: reviews, isFetching } = useGetReviewsQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!reviews?.length) {
    return null;
  }
  return <Reviews reviews={reviews} />;
};

export default ReviewsContainer;
