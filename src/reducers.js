import {combineReducers} from 'redux';
import {mockApi} from 'mockApi';

// Define your reducers here
const initialState = {
  theme: false,
  user: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };

    case 'SIGN_IN':
      // Perform login logic here and set the user state
      const {username, password} = action.payload;
      if (username === 'admin' && password === 'password') {
        const user =  mockApi.login(username, password);
        return {
          ...state,
          user,
        };
      } else {
        // Show error message or handle unsuccessful login
        return state;
      }

    case 'CREATE_ACCOUNT':
      // Perform create account logic here and set the user state
      const {newUsername, newPassword} = action.payload;
      // Create the account and set the user state accordingly
      const newUser = {username: newUsername, role: 'user'}; // Replace with your user object
      return {
        ...state,
        user: newUser,
      };

    default:
      return state;
  }
};

export default rootReducer;
