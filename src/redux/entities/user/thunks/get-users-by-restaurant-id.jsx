import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantUsersById } from '../../restaurant/selectors';
import { selectUserIds } from '../selectors';

export const getUsersByRestaurantId = createAsyncThunk(
  '/api/getReviewsByRestaurantId',
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    return await response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const restaurantUserIds = selectRestaurantUsersById(
        getState(),
        restaurantId
      );

      const userIds = selectUserIds(getState());
      return !restaurantUserIds.every((id) => userIds.includes(id));
    },
  }
);
