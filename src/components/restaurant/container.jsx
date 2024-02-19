import { useSelector } from 'react-redux';
import Restaurant from './component';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';

const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};

export default RestaurantContainer;
