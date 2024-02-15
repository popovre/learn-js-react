import { useSelector } from 'react-redux';
import { CartButton } from './component';
import { selectProductAmount } from '../../redux/ui/cart';

export const CartButtonContainer = () => {
  const amount = useSelector(selectProductAmount);

  return <CartButton amount={amount} />;
};
