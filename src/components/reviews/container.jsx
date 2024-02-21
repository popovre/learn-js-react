import Reviews from './component';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getReviewsByRestaurantId } from '../../redux/entities/review/thunks/get-reviews-by-restaurant-id';
import { getUsers } from '../../redux/entities/user/thunks/get-users';
import { useGetReviewsQuery } from '../../redux/services/api';

const ReviewsContainer = ({ restaurant }) => {
  const { data: reviews, isLoading } = useGetReviewsQuery(restaurant.id, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.filter((review) =>
        restaurant.reviews.includes(review.id)
      ),
    }),
  });

  console.log(reviews, 'reviews');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurant.id));
    dispatch(getUsers());
  }, [restaurant.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!reviews?.length) {
    return null;
  }
  return <Reviews reviewIds={reviews} />;
};

export default ReviewsContainer;
