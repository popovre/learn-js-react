import Layout from './components/layout/component';
import Restaurants from './components/restaurants/component';
import { Provider } from 'react-redux';
import { store } from './redux';
import { UserContext } from './contexts/user';
import { user as USER_DEFAULT } from './constants/structures';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState(USER_DEFAULT);
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
          <Restaurants />
        </Layout>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
