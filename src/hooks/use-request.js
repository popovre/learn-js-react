import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectStatus } from '../redux/ui/request/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export function useRequest(thunk, ...params) {
  const [request, setRequest] = useState();
  const requestStatus = useSelector((state) => {
    console.log(request);
    return selectStatus(state, request.requestId);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const request = dispatch(thunk(...params));
    setRequest(request);

    return () => {
      request.abort();
      setRequest(null);
    };
  }, [...params, thunk]);

  return requestStatus;
}
