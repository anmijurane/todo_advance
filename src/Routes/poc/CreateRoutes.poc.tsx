import React, { useMemo } from 'react';
import { BrowserRouter, Route, IndexRouteProps, Routes, PathRouteProps } from 'react-router-dom';

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

export type Routes = Array<AnyRoute>;

export interface AnyRoute extends PathRouteProps {
  component: () => JSX.Element;
  protectorType: ProtectorTypeRoute;
  path: PathRoute;
};

export type RecordRoute = Record<ProtectorTypeRoute, ProtectedRoute>;

export const RenderRoutes = ( protectedR: RecordRoute, routes: Routes ) => {

  const renderRoutes = useMemo(() => Object.keys(protectedR).map((routeProtected) => {
    const routeFilterForProtectorType = routes.filter(route => route.protectorType === routeProtected);
    const {
      component: ComponentRoute,
      path,
      resolve,
      index,
      ...restCurrentRoute
    } = protectedR[routeProtected as ProtectorTypeRoute];
    return (
      <Route
        key={routeProtected}
        element={<ComponentRoute resolve={resolve}/>}
        path={path}
        {...restCurrentRoute}
      >
        {routeFilterForProtectorType.map(route => {
          const {
            component: RouteComponent,
            path,
            ...restRouterProps
          } = route;
          return (
            <Route
              key={path}
              element={<RouteComponent />}
              path={path}
              {...restRouterProps}
            />
          )
        })}
      </Route>
    );
  }), [ protectedR, routes ]);

  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes}
      </Routes>
    </BrowserRouter>
  )
}
