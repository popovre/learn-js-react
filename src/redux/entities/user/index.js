import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../constants/normalized-mock';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    entities: normalizedUsers.reduce((acc, review) => {
      acc[review.id] = review;
      return acc;
    }),
    ids: normalizedUsers.map(({ id }) => id),
  },
});
