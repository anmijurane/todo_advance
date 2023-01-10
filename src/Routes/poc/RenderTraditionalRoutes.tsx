import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import type { RouteProps, IndexRouteProps, PathRouteProps } from 'react-router-dom';

//TODO: Crear el autocompletado para que el children pueda recibir hijos de tipo <RouteProps>

interface DescriptorRoute {
  baseUrl: string;
  routes: Array<RouteProps>
}

const RoutesDescriptor:DescriptorRoute = {
  baseUrl: '',
  routes: [
    {
      path: '/',
      element: (
        <>
          <h1>Layout</h1>
          <Outlet />
        </>
      ),
      children: []
    },
  ]
}

export const CreateRoutes = () => {
  return (
    <Routes>
      {/* <Route path='' element={}></Route> */}
    </Routes>
  )
}
