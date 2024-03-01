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
      <div className={classNames(styles.linkWrapper)}>
        <NavLink to="reviews">
          {({ isActive }) => (
            <Button className={classNames(styles.button)} disabled={isActive}>
              Reviews
            </Button>
          )}
        </NavLink>
        <NavLink to="menu">
          {({ isActive }) => (
            <Button className={classNames(styles.button)} disabled={isActive}>
              Menu
            </Button>
          )}
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Restaurant;
