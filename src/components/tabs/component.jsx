import { useSelector } from 'react-redux';
import {
  selectRestaurantById,
  selectRestaurantIds,
} from '../../redux/entities/restaurant/selectors';
import Button from '../button/component';
import styles from './styles.module.scss';
import classNames from 'classnames';

const Tabs = ({ onClick }) => {
  const marginClass = {
    marginS: styles.marginS,
    marginM: styles.marginM,
  };

  const margin = 'marginS';

  const restaurantIds = useSelector(selectRestaurantIds);

  const onButtonClickHandler = (id) => {
    onClick(id);
  };
  return (
    <div className={classNames(styles.root, styles.tabs, marginClass[margin])}>
      {restaurantIds.map((restaurantId, i) => {
        return (
          <Button
            onClick={() => onButtonClickHandler(restaurantId)}
            className={classNames(styles.button)}
            key={i}
          >
            {selected}
          </Button>
        );
      })}
    </div>
  );
};

export default Tabs;
