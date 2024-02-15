import { useSelector } from 'react-redux';
import { selectRestaurantMenuById } from '../../redux/entities/restaurant/selectors';
import Menu from './component';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDishesByRestaurantId } from '../../redux/entities/dish/thunks/get-dishes-by-restaurant-id';

const MenuContainer = ({ restaurantId }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
  }, [restaurantId]);

  if (!dishIds?.length) {
    return null;
  }

  return <Menu dishIds={dishIds} />;
};

export default MenuContainer;
