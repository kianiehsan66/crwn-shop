import { createSelector } from 'reselect';

const selectUser = sate => sate.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)
