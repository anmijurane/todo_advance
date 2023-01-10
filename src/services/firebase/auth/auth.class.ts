import { User as UserFirebase, Auth as AuthFirebase, AuthProvider, signInWithPopup } from 'firebase/auth';
import type { User } from '../../../Types/Properties';
import { auth } from '../config';


class Auth {
  private auth:AuthFirebase = auth;
  protected CODE_FIREBASE_ERROR = 'F_FIREBASE_0000'; //not yet defined
  protected FIREBASE_NAME = 'auth-firebase';
  constructor() {
    this.auth = auth;
  }

  protected getAuth() {
    return this.auth;
  }

  login() {}

  protected async providerLogin(provider: AuthProvider) {
    const userCredentials = await signInWithPopup(
      this.getAuth(),
      provider
    );
    return userCredentials
  }

  protected async createUserObject(userProvider: UserFirebase, user: User): Promise<User> {
    return {
      ...user,
      id: userProvider.uid,
      email: userProvider.email,
      emailVerified: userProvider.emailVerified,
      photoURL: userProvider?.photoURL || '',
      phoneNumber: userProvider.phoneNumber,
    }
  };
};

export default Auth;
