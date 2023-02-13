import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';

import store from './store';
import { RenderRoutes } from './Routes/CreateRoutes';
import { protectedRoute, routes } from './Routes/routes';

export const TodoApp = () => {

  return (
    <Provider store={store}>
      <CssBaseline />
      {RenderRoutes( protectedRoute, routes )}
    </Provider>
  );

};
