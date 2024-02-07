import Layout from './components/layout/component';
import { restaurants } from './constants/mock';
import Restaurants from './components/restaurants/component';
import { Provider } from 'react-redux';
import { store } from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Restaurants />
      </Layout>
    </Provider>
  );
};

export default App;
