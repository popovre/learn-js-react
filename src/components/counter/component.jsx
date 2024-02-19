import Button from '../button/component';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import {
  selectProductAmountById,
  decrement,
  increment,
} from '../../redux/ui/cart';
import { useDispatch } from 'react-redux';

const Counter = ({ minValue, maxValue, dishId }) => {
  const amount = useSelector((state) => selectProductAmountById(state, dishId));
  const dispatch = useDispatch();

  return (
    <div className={classNames(styles.root)}>
      <Button
        className={classNames(styles.button)}
        disabled={amount === minValue}
        onClick={() => dispatch(decrement(dishId))}
      >
        -
      </Button>
      <span>{amount}</span>
      <Button
        className={classNames(styles.button)}
        disabled={amount === maxValue}
        onClick={() => dispatch(increment(dishId))}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
