import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';
import Button from '../button/component';
import classNames from 'classnames';
import styles from './style.module.scss';

const Tab = ({ id, onClick }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  return (
    <Button className={classNames(styles.button)} onClick={onClick}>
      {restaurant.name}
    </Button>
  );
};

export default Tab;
