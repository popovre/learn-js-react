export const selectReviewModule = (state) => state.review;

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectReviewById = (state, id) => {
  // console.log(
  //   state,
  //   'state',
  //   selectReviewModule(state),
  //   'selectReviewModule(state)'
  // );
  selectReviewModule(state).entities[id];
};
