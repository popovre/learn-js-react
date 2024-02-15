import classNames from 'classnames';
import styles from './style.module.scss';
import Reviews from '../reviews/component';
import ReviewForm from '../review-form/component';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import MenuContainer from '../menu/container';

const Restaurant = ({ restaurant }) => {
  const { user } = useContext(UserContext);
  return (
    <div className={classNames(styles.root)}>
      <h1 className={classNames(styles.h1, styles.restaurantName)}>
        {restaurant.name}
      </h1>
      <h3 className={classNames(styles.h3)}>Menu</h3>
      <MenuContainer restaurantId={restaurant.id} />
      <h3 className={classNames(styles.h3, styles.reviewTitle)}>Reviews</h3>
      <Reviews reviewIds={restaurant.reviews} />
      {user.name === 'validName' && user.mail === 'validMail' && (
        <ReviewForm userName={user.name} />
      )}
    </div>
  );
};

export default Restaurant;
