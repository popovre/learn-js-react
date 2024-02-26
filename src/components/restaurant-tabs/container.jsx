import RestaurantTabs from './component';
import { useGetRestaurantsQuery } from '../../redux/services/api';

const TabsContainer = (props) => {
  const { data: restaurants } = useGetRestaurantsQuery();

  return <RestaurantTabs {...props} restaurants={restaurants} />;
};

export default TabsContainer;
