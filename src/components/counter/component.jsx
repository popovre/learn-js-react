import Button from '../button/component';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Counter = ({ minValue, maxValue, defaultValue = minValue }) => {
  const [count, setCount] = useState(defaultValue);

  const decrement = () => {
    if (count > minValue) {
      const newState = count - 1;
      setCount(newState);
    }
  };

  const increment = () => {
    if (count < maxValue) {
      const newState = count + 1;
      setCount(newState);
    }
  };

  return (
    <div className={classNames(styles.root)}>
      <Button
        className={classNames(styles.button)}
        disabled={count === minValue}
        onClick={decrement}
      >
        -
      </Button>
      <span>{count}</span>
      <Button
        className={classNames(styles.button)}
        disabled={count === maxValue}
        onClick={increment}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
