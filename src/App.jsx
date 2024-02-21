import Layout from './components/layout/component';
import { Provider } from 'react-redux';
import { store } from './redux';
import { UserContext } from './contexts/user';
import { user as USER_DEFAULT } from './constants/structures';
import { useState } from 'react';
import RestaurantPage from './pages/restaurant-page/restaurant';

const App = () => {
  const [user, setUser] = useState(USER_DEFAULT);
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <RestaurantPage />
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
