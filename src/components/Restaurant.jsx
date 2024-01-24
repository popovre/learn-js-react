import MenuList from './MenuList';
import ReviewList from './ReviewList';
import styles from './restaurant.module.css';
import classNames from 'classnames';

const Restaurant = ({ restaurant }) => {
  return (
    <>
      <div className={classNames(styles.wrapper)}>
        <h1 className={classNames(styles.h1, styles.restaurantName)}>
          {restaurant.name}
        </h1>
        <h3 className={classNames(styles.h3)}>Menu</h3>
        <MenuList menu={restaurant.menu} />
        <h3 className={classNames(styles.h3, styles.reviewTitle)}>Reviews</h3>
        <ReviewList review={restaurant.reviews} />
      </div>
    </>
  );
};

export default Restaurant;
