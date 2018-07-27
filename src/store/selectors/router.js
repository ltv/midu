import { createSelector } from 'reselect';

const getRouter = state => state.router;
const getPath = createSelector(getRouter, router => router.path);

export default {
  getPath
};
