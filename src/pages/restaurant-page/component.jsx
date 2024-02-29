import TabsContainer from '../../components/restaurant-tabs/container';
import { Outlet } from 'react-router-dom';

const RestaurantPage = () => {
  return (
    <div>
      <TabsContainer />
      <Outlet />
    </div>
  );
};

export default RestaurantPage;
