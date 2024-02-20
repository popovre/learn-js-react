import classNames from 'classnames';
import styles from './style.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurants';
import { selectIsLoading } from '../../redux/ui/request/selectors';
import TabsContainer from '../restaurant-tabs/container';
import RestaurantContainer from '../restaurant/container';
// import { useRequest } from '../../hooks/use-request';
// import { REQUEST_STATUS } from '../../redux/ui/request/constants';

const Restaurants = () => {
  const [requestId, setRequestId] = useState(null);
  const isLoading = useSelector((state) => selectIsLoading(state, requestId));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const onTabClick = (id) => {
    setRequestId(id);
  };

  return (
    <div>
      <TabsContainer onClick={onTabClick} />
      <div className={classNames(styles.restaurants)}>
        {requestId && <RestaurantContainer id={requestId} key={requestId} />}
      </div>
    </div>
  );
};

export default Restaurants;
