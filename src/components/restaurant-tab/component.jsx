import Button from '../button/component';
import classNames from 'classnames';
import styles from './style.module.scss';

const RestaurantTab = ({ name, onClick, isActive }) => {
  return (
    <Button
      className={classNames(styles.button)}
      disabled={isActive}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default RestaurantTab;
