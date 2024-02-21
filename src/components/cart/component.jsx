import Dish from '../dish/component';
import classNames from 'classnames';
import styles from './style.module.scss';

const Cart = ({ productIds }) => {
  console.log(productIds);
  return (
    <div className={classNames(styles.root)}>
      <button onClick={() => {}}>Close</button>
      {productIds?.length
        ? productIds.map((id) => <Dish key={id} dishId={id} />)
        : 'Empty'}
    </div>
  );
};

export default Cart;
