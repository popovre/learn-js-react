import MainLayout from './layouts/MainLayout';
import { restaurants } from './constants/mock';
import Restaurant from './components/Restaurant';

const App = () => {
  return (
    <MainLayout>
      {restaurants.map((restaurant) => {
        return (
          <Restaurant
            className="restaurant"
            key={restaurant.id}
            restaurant={restaurant}
          />
        );
      })}
    </MainLayout>
  );
};

export default App;
