import Button from '../button/component';
import styles from './styles.module.scss';
import classNames from 'classnames';

const Tabs = ({ restaurants, onClick }) => {
  const marginClass = {
    marginS: styles.marginS,
    marginM: styles.marginM,
  };

  const margin = 'marginS';

  const onButtonClickHandler = (id) => {
    onClick(id);
  };
  return (
    <div className={classNames(styles.root, styles.tabs, marginClass[margin])}>
      {restaurants.map((restaurant, i) => (
        <Button
          id={restaurant.id}
          onClick={onButtonClickHandler}
          className={classNames(styles.button)}
          key={i}
        >
          {restaurant.name}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
