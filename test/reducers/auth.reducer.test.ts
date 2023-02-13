import type { Auth } from '@types-app/Reducers';
import { authReducer } from '../../src/reducers';


describe('Testing auth reducer', () => {

  const initialState:Auth = {
    user: {
      id: '',
      email: '',
      displayName: '',
      emailVerified: false,
      name: '',
      phoneNumber: '',
      surname: '',
      photoURL: '',
    },
    isLoggin: false,
  };

  test('should login action after logout action', () => {
    const payload = {
      ...initialState.user
    };
    const stateLogin = authReducer(initialState, { type: 'auth/login', payload })
    expect(payload).toEqual(stateLogin.user);
    expect(stateLogin.isLoggin).toBeTruthy();
    const stateLogout = authReducer(stateLogin, { type: 'auth/logout' });
    expect(stateLogout.isLoggin).toBeFalsy();
  });

});
