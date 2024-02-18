import Counter from '../counter/component';
import classNames from 'classnames';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/selectors';

const Dish = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  const minValue = 0;
  const maxValue = 5;
  return (
    <div className={classNames(styles.dish)}>
      <div>Dish: {dish?.name}</div>
      <div>Price: {dish?.price}</div>
      <div>Ingredients: {dish?.ingredients.join(', ')} </div>
      <div>
        <Counter dishId={id} minValue={minValue} maxValue={maxValue} />
      </div>
    </div>
  );
};

export default Dish;
