import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getUsersByRestaurantId } from './thunks/get-users-by-restaurant-id';

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: 'user',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getUsersByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    });
  },
});
