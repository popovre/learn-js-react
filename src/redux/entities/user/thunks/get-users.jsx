import { createAsyncThunk } from '@reduxjs/toolkit';
// import { selectRestaurantUsersById } from '../../restaurant/selectors';
// import { selectUserIds } from '../selectors';

export const getUsers = createAsyncThunk(
  '/api/getUsersByRestaurantId',
  async () => {
    const response = await fetch(`http://localhost:3001/api/users`);
    console.log('get users');
    return await response.json();
  }
  // {
  //   condition: (userId, { getState }) => {
  //     const restaurantUserIds = selectRestaurantUsersById(
  //       getState(),
  //       restaurantId
  //     );

  //     const userIds = selectUserIds(getState());
  //     return !restaurantUserIds.every((id) => userIds.includes(id));
  //   },
  // }
);
