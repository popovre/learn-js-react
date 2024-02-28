import { NavLink } from 'react-router-dom';
import RestaurantTab from '../restaurant-tab/component';
import styles from './styles.module.scss';
import classNames from 'classnames';

const RestaurantTabs = ({ onClick, restaurants }) => {
  const marginClass = {
    marginS: styles.marginS,
    marginM: styles.marginM,
  };

  const margin = 'marginS';

  return (
    <div className={classNames(styles.root, styles.tabs, marginClass[margin])}>
      {restaurants.map(({ id, name }) => {
        return (
          <NavLink to={`/restaurants/${id}`} key={id}>
            <RestaurantTab
              name={name}
              onClick={() => {
                onClick(id);
              }}
              isActive={false}
            />
          </NavLink>
        );
      })}
    </div>
  );
};

export default RestaurantTabs;
