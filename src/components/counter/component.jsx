import Button from '../button/component';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Counter = ({ minValue, maxValue, defaultValue = minValue }) => {
  const [count, setCount] = useState(defaultValue);
  const [decrementState, setDecrementState] = useState(count === minValue);
  const [incrementState, setIncrementState] = useState(count === maxValue);

  const decrement = () => {
    if (count > minValue) {
      const newState = count - 1;
      setDecrementState(newState === minValue);
      setIncrementState(newState === maxValue);
      setCount(newState);
    }
  };

  const increment = () => {
    if (count < maxValue) {
      const newState = count + 1;
      setDecrementState(newState === minValue);
      setIncrementState(newState === maxValue);
      setCount(newState);
    }
  };

  return (
    <div className={classNames(styles.root)}>
      <Button
        className={classNames(styles.button)}
        disabled={decrementState}
        onClick={decrement}
      >
        -
      </Button>
      <span>{count}</span>
      <Button
        className={classNames(styles.button)}
        disabled={incrementState}
        onClick={increment}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
