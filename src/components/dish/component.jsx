import Counter from '../counter/component';
import classNames from 'classnames';
import styles from './style.module.scss';

const Dish = ({ dish }) => {
  const minValue = 0;
  const maxValue = 5;
  return (
    <div className={classNames(styles.dish)}>
      <div>Dish: {dish.name}</div>
      <div>Price: {dish.price}</div>
      <div>Ingredients: {dish.ingredients.join(', ')} </div>
      <div>
        <Counter minValue={minValue} maxValue={maxValue} />
      </div>
    </div>
  );
};

export default Dish;
