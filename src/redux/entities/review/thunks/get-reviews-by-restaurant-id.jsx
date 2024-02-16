import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantReviewsById } from '../../restaurant/selectors';
import { selectReviewIds } from '../selectors';

export const getReviewsByRestaurantId = createAsyncThunk(
  '/api/getReviewsByRestaurantId',
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    console.log('get review');
    return await response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const restaurantReviewIds = selectRestaurantReviewsById(
        getState(),
        restaurantId
      );

      const reviewIds = selectReviewIds(getState());
      return !restaurantReviewIds.every((id) => reviewIds.includes(id));
    },
  }
);
