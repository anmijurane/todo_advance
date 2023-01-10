import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../reducers';

const isDevEnviroment = true; //TODO: Implements env

const store = configureStore({
  reducer: {
    'auth': authReducer
  },
  devTools: isDevEnviroment,
});

export type RootState = ReturnType<typeof store.getState>;
export type GetRootState = () => RootState;


export default store;

