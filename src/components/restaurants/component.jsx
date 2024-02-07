import Restaurant from '../restaurant/component';
import Tabs from '../tabs/component';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useState } from 'react';
import {
  selectRestaurantById,
  selectRestaurantIds,
} from '../../redux/entities/restaurant/selectors';
import { useSelector } from 'react-redux';

const Restaurants = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurantIds[0]
  );

  const selectedRestaurant = restaurantIds.find(
    (restaurantId) => restaurantId === selectedRestaurant
  );

  const onTabButtonClick = (id) => {
    setCurrentRestaurantId(id);
  };

  return (
    <div>
      <Tabs onClick={onTabButtonClick}></Tabs>
      <div className={classNames(styles.restaurants)}>
        {currentRestaurantId && (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        )}
      </div>
    </div>
  );
};

export default Restaurants;
