import type { Dispatch } from '@reduxjs/toolkit';
import { authActions } from '../reducers';
import { AuthEmail } from '../services/firebase/auth/email-auth.class';
import { ErrorBundary, User, UserCredentials } from "../Types/Properties";

export const Login =
  (credentials: UserCredentials) => async (dispatch: Dispatch) => {
    //TODO: UI LOADING CONTROLLER <START>
    try {
      const auth = new AuthEmail(credentials);
      const user = await auth.login();
      return dispatch(authActions.login( user ));
    } catch (error: ErrorBundary | any) {
      //TODO: UI ERRORS CONTROLLER
      console.log(error);
    } finally {
      //TODO: UI LOADING CONTROLLER <END>
    }
}

export const Register = (credentials: UserCredentials, user: User) =>
  async (dispatch: Dispatch) => {

    try {
      const auth = new AuthEmail(credentials);
      const userCreated = await auth.createUser(user);
      return dispatch(authActions.login( userCreated ));
    } catch ( error: ErrorBundary | any ) {
      console.log(error);
    }

}
