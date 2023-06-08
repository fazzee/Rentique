export interface UserAuthState {
  isAuthenticated: boolean;
}

export const UserAuthInitialState: UserAuthState = {
  isAuthenticated: false,
};
