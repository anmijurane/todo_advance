import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from '@components/Navbar';
import { Link, LinkProps } from '../../custom/components/Link';
import useSelector from '../../hooks/useSelector';


export const UnprotectedLayout = () => {

  const { isLoggin } = useSelector(state => state.auth);

  const links: Array<LinkProps> = [
    {
      to:'/auth/login',
      sx: { my: 1, mx: 1.5 },
      children: 'Iniciar Session',
      color: '#FFF',
    },
    {
      to: '/auth/register',
      sx: { my: 1, mx: 1.5 },
      children: 'Registrar',
      color: '#FFF',
    },
    {
      to:'/auth/recover-password',
      sx: { my: 1, mx: 1.5 },
      children: 'Recuperar Contraseña',
      color: '#FFF',
    },
  ];

  return (
    <>
      <Navbar
        title='Todo App'
        navRigth={links?.map(link => <Link key={link.to} {...link} /> )}
      />
      {isLoggin ? <Navigate to='/home' replace /> : <Outlet />}
    </>
  )
};
