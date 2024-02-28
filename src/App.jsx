import { Provider } from 'react-redux';
import { store } from './redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContext } from './contexts/user';
import { user as USER_DEFAULT } from './constants/structures';
import { useState } from 'react';
import RestaurantPage from './pages/restaurant-page/component';
import Layout from './components/layout/component';
import HomePage from './pages/home-page/component';
import DishPage from './pages/dish-page/component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/restaurants',
        element: <RestaurantPage />,
      },
      { path: '/dish/:id', element: <DishPage /> },
    ],
  },
]);

const App = () => {
  const [user, setUser] = useState(USER_DEFAULT);
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
