import RestaurantTabs from './component';
import { useGetRestaurantsQuery } from '../../redux/services/api';

const TabsContainer = (props) => {
  const { data: restaurants } = useGetRestaurantsQuery();
  console.log(restaurants);

  return <RestaurantTabs {...props} restaurants={restaurants} />;
};

export default TabsContainer;
