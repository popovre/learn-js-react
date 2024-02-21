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
          <RestaurantTab
            key={id}
            name={name}
            onClick={() => {
              onClick(id);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantTabs;
