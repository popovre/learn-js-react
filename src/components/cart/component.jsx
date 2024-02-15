import Dish from '../dish/component';

const Cart = ({ productIds }) => {
  return (
    <div>
      {productIds?.length
        ? productIds.map((id) => <Dish key={id} id={id} />)
        : 'Empty'}
    </div>
  );
};

export default Cart;
