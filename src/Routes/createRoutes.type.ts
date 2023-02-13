import { IndexRouteProps, PathRouteProps } from 'react-router-dom';

export type ProtectorTypeRoute =
  | 'protected'
  | 'noprotected'
  | '404-not-found';

export type PathProtected =
  | ''
  | '/'
  | '*'
  | 'auth'
  | 'home';

export type PathRoute =
  | ''
  | '/'
  | 'login'
  | 'register'
  | 'recover-password';

export interface ProtectedRouteProps {
  resolve?: () => void;
};

export interface ProtectedRoute extends IndexRouteProps {
  component: ({ resolve }: ProtectedRouteProps) => JSX.Element;
  resolve: () => void;
  path: PathProtected;
  index: true;
};

export type RoutesType = Array<AnyRoute>;

export interface AnyRoute extends PathRouteProps {
  component: () => JSX.Element;
  protectorType: ProtectorTypeRoute;
  path: PathRoute;
};

export type RecordRoute = Record<ProtectorTypeRoute, ProtectedRoute>;
