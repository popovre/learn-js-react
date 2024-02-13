import Layout from './components/layout/component';
import { restaurants } from './constants/mock';
import Restaurants from './components/restaurants/component';
import { useState } from 'react';
import { UserContext } from './contexts/user';
import { user as USER_DEFAULT } from './constants/structures';

const App = () => {
  const [user, setUser] = useState(USER_DEFAULT);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Restaurants restaurants={restaurants} />
      </Layout>
    </UserContext.Provider>
  );
};

export default App;
