import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectStatus } from '../redux/ui/request/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

export function useMakeRequest(thunk) {
  const [request, setRequest] = useState();
  const requestStatus = useSelector((state) => {
    console.log(request);
    return selectStatus(state, request.requestId);
  });

  const dispatch = useDispatch();

  const makeRequest = useCallback(
    (...params) => {
      setRequest(dispatch(thunk(...params)));
    },
    [dispatch, thunk]
  );

  return [requestStatus, makeRequest];
}
