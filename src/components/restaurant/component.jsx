import classNames from 'classnames';
import styles from './style.module.scss';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Button from '../button/component';

const Restaurant = ({ restaurant }) => {
  return (
    <div className={classNames(styles.root)}>
      <h1 className={classNames(styles.h1, styles.restaurantName)}>
        {restaurant.name}
      </h1>
      <NavLink to="menu">
        {({ isActive }) => <Button disabled={isActive}>Menu</Button>}
      </NavLink>
      <NavLink to="reviews">
        {({ isActive }) => <Button disabled={isActive}>Reviews</Button>}
      </NavLink>
      <Outlet />
      {/* <h3 className={classNames(styles.h3)}>Menu</h3>
      <MenuContainer restaurant={restaurant} />
      <h3 className={classNames(styles.h3, styles.reviewTitle)}>Reviews</h3>
      <ReviewsContainer restaurant={restaurant} /> */}
      {/* <CreateReviewFormContainer restaurantId={restaurant.id} /> */}
    </div>
  );
};

export default Restaurant;
