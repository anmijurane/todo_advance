import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch as useReduxDispatch } from 'react-redux';
import { Login, Register } from '../actions/auth.actions';

/**
 * here are all the actions to be called in a hook,
 * NOTE: you should not call actions that come from a slice
*/
const useDispatch = () => bindActionCreators(
  {
    LoginAction: Login,
    RegisterAction: Register,
  },
  useReduxDispatch()
);

export default useDispatch;
