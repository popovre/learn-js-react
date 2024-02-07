import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Tab from '../tab/component';

const Tabs = ({ onClick }) => {
  const marginClass = {
    marginS: styles.marginS,
    marginM: styles.marginM,
  };

  const margin = 'marginS';

  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <div className={classNames(styles.root, styles.tabs, marginClass[margin])}>
      {restaurantIds.map((id) => {
        return (
          <Tab
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

export default Tabs;
