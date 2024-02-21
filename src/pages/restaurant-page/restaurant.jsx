import classNames from 'classnames';
import styles from './style.module.scss';
import { useState } from 'react';
import TabsContainer from '../../components/restaurant-tabs/container';
import RestaurantContainer from '../../components/restaurant/container';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import Layout from '../../components/layout/component';

const RestaurantPage = () => {
  const [restaurantId, setRestaurantId] = useState(null);

  const { isLoading, isFetching, refetch } = useGetRestaurantsQuery();

  return (
    <Layout>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <TabsContainer onClick={setRestaurantId} />
          <div className={classNames(styles.restaurants)}>
            {restaurantId && (
              <RestaurantContainer id={restaurantId} key={restaurantId} />
            )}
          </div>
        </>
      )}
    </Layout>
  );
};

export default RestaurantPage;
