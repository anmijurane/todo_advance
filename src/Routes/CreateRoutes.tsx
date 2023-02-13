import React, { useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectorTypeRoute, RoutesType, RecordRoute } from './createRoutes.type'

export const RenderRoutes = (protectedR: RecordRoute, routes: RoutesType) => {

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
        element={<ComponentRoute resolve={resolve} />}
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
  }), [protectedR, routes]);

  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes}
      </Routes>
    </BrowserRouter>
  )
}

