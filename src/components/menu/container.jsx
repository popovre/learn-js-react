import Menu from './component';
import { useGetDishesQuery } from '../../redux/services/api';

const MenuContainer = ({ restaurant }) => {
  const { data: dishes, isLoading } = useGetDishesQuery(restaurant.id, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.filter((dish) => restaurant.menu.includes(dish.id)),
    }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes} />;
};

export default MenuContainer;
