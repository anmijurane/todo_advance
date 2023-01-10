import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { createRoutes, PathRoutes } from './Routes/CreateRoutes';
import store from './store';

export const TodoApp = () => {

  const routes = useMemo(() => createRoutes(), []);

  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {Object.keys(routes).map((route) => {
            //V1 - implements Routes with Descriptor
            //TODO: V2 - implements Component with Route Protected
            const Component = routes[route as PathRoutes].component;
            return <Route key={route} path={route} element={<Component />} />
          })}
        </Routes>
      </BrowserRouter>
    </Provider>
  )
};
