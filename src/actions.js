export const setTheme = theme => ({
  type: 'SET_THEME',
  payload: theme,
});

export const signIn = (username, password) => ({
  type: 'SIGN_IN',
  payload: {username, password},
});

export const createAccount = (username, password) => ({
  type: 'CREATE_ACCOUNT',
  payload: {username, password},
});
