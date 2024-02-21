import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({ url: 'restaurants' }),
    }),
    getUsers: builder.query({
      query: () => ({ url: 'users' }),
    }),
    getDishes: builder.query({
      query: (restaurantId) => ({
        url: `dishes?restaurantId=${restaurantId}`,
        params: { restaurantId },
      }),
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: `reviews?restaurantId=${restaurantId}`,
        params: { restaurantId },
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetDishesQuery, useGetReviewsQuery } =
  api;
