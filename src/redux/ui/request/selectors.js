import { REQUEST_STATUS } from './constants';

export const selectIsLoading = (state, id) =>
  state[id] === REQUEST_STATUS.pending;
