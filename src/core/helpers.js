export const withMutators = mutators => (state, action) => {
  const fn = mutators[action.type];
  fn && fn(state, action);
};
