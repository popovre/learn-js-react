import classNames from 'classnames';
import styles from './style.module.scss';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import MenuContainer from '../menu/container';
import ReviewsContainer from '../reviews/container';
import CreateReviewFormContainer from '../create-review-form/container';

const Restaurant = ({ restaurant }) => {
  const { user } = useContext(UserContext);

  return (
    <div className={classNames(styles.root)}>
      <h1 className={classNames(styles.h1, styles.restaurantName)}>
        {restaurant.name}
      </h1>
      <h3 className={classNames(styles.h3)}>Menu</h3>
      <MenuContainer restaurant={restaurant} />
      <h3 className={classNames(styles.h3, styles.reviewTitle)}>Reviews</h3>
      <ReviewsContainer restaurant={restaurant} />
      {user.name === 'validName' && user.mail === 'validMail' && (
        <CreateReviewFormContainer restaurantId={restaurant.id} />
      )}
      {/* <CreateReviewFormContainer restaurantId={restaurant.id} /> */}
    </div>
  );
};

export default Restaurant;
