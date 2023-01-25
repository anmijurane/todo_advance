import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../Types/Properties';
import { Auth } from '../Types/Reducers';

const InitState:Auth = {
  user: {
    id: '',
    email: '',
    displayName: '',
    emailVerified: false,
    name: '',
    phoneNumber: '',
    surname: '',
    photoURL: '',
  },
  isLoggin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: InitState,
  reducers: {
    login: (state, action: PayloadAction<User> ) => {
      state.isLoggin = true;
      state.user = action.payload
    },
    logout: (state) => {
      state.user = InitState.user;
      state.isLoggin = false;
    }
  }
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
