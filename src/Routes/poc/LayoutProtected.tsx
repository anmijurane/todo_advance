import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import { Navbar } from '@components/Navbar';
import useSelector from '../../hooks/useSelector';
import { authActions } from '../../reducers';

export const LayoutProtected = () => {

  const { isLoggin } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const closeSession = () => {
    //TODO: create a logout action.
    dispatch(authActions.logout());
  }

  return (
    <>
      <Navbar
        title='Todo App'
        navRigth={<Button variant='contained' color='secondary' onClick={closeSession}>Cerrar Session</Button>}
      />
      {isLoggin ? <Outlet /> : <Navigate to='/auth/login' replace />}
    </>
  );
};
