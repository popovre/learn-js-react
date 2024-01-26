const Dish = ({ dish }) => {
  return (
    <div>
      <div>Dish: {dish.name}</div>
      <div>Price: {dish.price}</div>
      <div>Ingredients: {dish.ingredients.join(', ')} </div>
    </div>
  );
};

export default Dish;
