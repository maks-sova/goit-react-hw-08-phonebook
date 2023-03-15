export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filter.filter;

export const selectIsLogin = state => state.auth.isLogin;

export const selectUserName = state => state.auth.user.name;

export const selectError = state => state.contacts.error;
