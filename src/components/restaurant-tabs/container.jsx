import { useSelector } from 'react-redux';
import RestaurantTabs from './component';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';

const TabsContainer = (props) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return <RestaurantTabs {...props} restaurantIds={restaurantIds} />;
};

export default TabsContainer;
