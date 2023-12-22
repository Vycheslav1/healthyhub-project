export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const getAuthStatus = (state) => !!state.auth.token;

export const getUserInfo = (state) => state.auth.user;

export const getDateLastWeight = (state) => state.auth.dateLastWeight;
