import React from 'react';
import { NotFound } from '../../pages';
import { Login, Register, RecoverPassword } from '../../pages/auth';

export type PathRoutes =
  | '*'
  | 'auth/login'
  | 'auth/register'
  | 'auth/recover-password'

interface RenderObject {
  component: () => JSX.Element;
}

type RoutesApp = Record<PathRoutes, RenderObject>;

export const createRoutes = ():RoutesApp => ({
  ['auth/login']: { component: Login },
  ['auth/register']: { component: Register },
  ['auth/recover-password']: { component: RecoverPassword },
  ['*']: { component: NotFound },
});

