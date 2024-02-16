import { useSelector } from 'react-redux';
import Reviews from './component';
import { selectRestaurantReviewsById } from '../../redux/entities/restaurant/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getReviewsByRestaurantId } from '../../redux/entities/review/thunks/get-reviews-by-restaurant-id';
import { getUsers } from '../../redux/entities/user/thunks/get-users';

const ReviewsContainer = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
    dispatch(getUsers());
  }, [restaurantId]);

  if (!reviewIds?.length) {
    return null;
  }
  return <Reviews reviewIds={reviewIds} />;
};

export default ReviewsContainer;
