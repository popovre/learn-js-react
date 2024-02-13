import Restaurant from '../restaurant/component';
import Tabs from '../tabs/component';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useState } from 'react';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';
import { useSelector } from 'react-redux';

const Restaurants = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurantIds[0]
  );

  const onTabClick = (id) => {
    setCurrentRestaurantId(id);
  };

  return (
    <div>
      <Tabs onClick={onTabClick} />
      <div className={classNames(styles.restaurants)}>
        {currentRestaurantId && (
          <Restaurant id={currentRestaurantId} key={currentRestaurantId} />
        )}
      </div>
    </div>
  );
};

export default Restaurants;
