import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { authReducer } from '../reducers';

const isDevEnviroment = true; //TODO: Implements env

const rootReducers = combineReducers({
  'auth': authReducer,
})

export const setupStore = ( preloadedState?: PreloadedState<RootState> ) => configureStore({
  reducer: rootReducers,
  devTools: isDevEnviroment,
  preloadedState,
});

const store = setupStore();

export type RootState = ReturnType<typeof rootReducers>;
export type GetRootState = () => RootState;

export default store;

