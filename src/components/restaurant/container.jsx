import Restaurant from './component';
import { useGetRestaurantsQuery } from '../../redux/services/api';

const RestaurantContainer = ({ id }) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find((restaurant) => restaurant.id === id),
    }),
  });

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};

export default RestaurantContainer;
