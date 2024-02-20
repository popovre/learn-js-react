import { REQUEST_STATUS } from './constants';

export const selectStatus = (state, id) => state[id] || REQUEST_STATUS.idle;
export const selectIsLoading = (state, id) =>
  state[id] === REQUEST_STATUS.pending;
