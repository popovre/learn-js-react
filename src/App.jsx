import Layout from './components/layout/component';
import { restaurants } from './constants/mock';
import Restaurants from './components/restaurants/component';

const App = () => {
  return (
    <Layout>
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
};

export default App;
