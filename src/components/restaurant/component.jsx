import classNames from 'classnames';
import styles from './style.module.scss';
import Menu from '../menu/component';
import Reviews from '../reviews/component';
import ReviewForm from '../review-form/component';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';

const Restaurant = ({ id }) => {
  const { user } = useContext(UserContext);
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  return (
    <div className={classNames(styles.root)}>
      <h1 className={classNames(styles.h1, styles.restaurantName)}>
        {restaurant.name}
      </h1>
      <h3 className={classNames(styles.h3)}>Menu</h3>
      <Menu menuIds={restaurant.menu} />
      <h3 className={classNames(styles.h3, styles.reviewTitle)}>Reviews</h3>
      <Reviews reviewIds={restaurant.reviews} />
      {user.name === 'validName' && user.mail === 'validMail' && (
        <ReviewForm userName={user.name} />
      )}
    </div>
  );
};

export default Restaurant;
