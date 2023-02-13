import React from 'react';
import { Login, RecoverPassword, Register } from '../../pages/auth';
import { RecordRoute, Routes } from './CreateRoutes.poc';
import { LayoutProtected } from './LayoutProtected';
import { UnprotectedLayout } from './UnprotectedLayout';

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

export const routes: Routes = [
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

