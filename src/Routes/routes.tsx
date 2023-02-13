import React from 'react';
import { Login, RecoverPassword, Register } from '../pages/auth';
import { RecordRoute, RoutesType } from './CreateRoutes';
import { LayoutProtected } from './Layouts/LayoutProtected';
import { UnprotectedLayout } from './Layouts/UnprotectedLayout';

export const protectedRoute: RecordRoute = {
  'protected': {
    component: () => <LayoutProtected />,
    resolve: () => {},
    path: 'home',
    index: true
  },
  'noprotected': {
    component: () => <UnprotectedLayout />,
    resolve: () => {},
    path: 'auth',
    index: true
  },
  '404-not-found': {
    component: () => <h1> Not Found </h1>,
    resolve: () => {},
    path: '*',
    index: true
  }
};

export const routes: RoutesType = [
  {
    component: () => <Login />,
    path: 'login',
    protectorType: 'noprotected'
  },
  {
    component: () => <Register />,
    path: 'register',
    protectorType: 'noprotected'
  },
  {
    component: () => <RecoverPassword />,
    path: 'recover-password',
    protectorType: 'noprotected'
  },
  {
    component: () => <h2> HOME </h2>,
    path: '',
    protectorType: 'protected'
  },
];

