import RestaurantTab from '../restaurant-tab/component';
import styles from './styles.module.scss';
import classNames from 'classnames';

const RestaurantTabs = ({ onClick, restaurantIds }) => {
  const marginClass = {
    marginS: styles.marginS,
    marginM: styles.marginM,
  };

  const margin = 'marginS';

  // const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <div className={classNames(styles.root, styles.tabs, marginClass[margin])}>
      {restaurantIds.map((id) => {
        return (
          <RestaurantTab
            key={id}
            id={id}
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
