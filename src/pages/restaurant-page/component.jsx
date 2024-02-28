import classNames from 'classnames';
import styles from './style.module.scss';
import { useState } from 'react';
import TabsContainer from '../../components/restaurant-tabs/container';
import RestaurantContainer from '../../components/restaurant/container';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import { Outlet } from 'react-router-dom';

const RestaurantPage = () => {
  // const [restaurantId, setRestaurantId] = useState(null);

  // const { isFetching, refetch } = useGetRestaurantsQuery();

  return (
    <div>
      <TabsContainer />
      <Outlet />
    </div>
  );
  //  isFetching ? (
  //   <div>Loading...</div>
  // ) :
  /* <div className={classNames(styles.restaurants)}>
        {restaurantId && (
          <RestaurantContainer id={restaurantId} key={restaurantId} />
        )} */
  /* </div> */
};

export default RestaurantPage;
