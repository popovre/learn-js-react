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
      query: (dishId) => ({ url: 'dishes', params: { dishId } }),
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({ url: 'reviews', params: { restaurantId } }),
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetDishesQuery, useGetReviewsQuery } =
  api;
