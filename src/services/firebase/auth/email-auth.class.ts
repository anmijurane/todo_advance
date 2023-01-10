import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import type { User, UserCredentials } from '../../../Types/Properties';
import Auth from './auth.class'
import { getFirebaseError } from '../utils';
import DB from '../firestore/firestore.db';

export class AuthEmail extends Auth {

  private email: string;
  private password: string;

  constructor(userCredentials: UserCredentials ) {
    super();
    this.email = userCredentials.email;
    this.password = userCredentials.password;
  }

  async createUser(user: User): Promise<User> {
    return new Promise<User>(async (resolve, reject) => {
      try {
        const userCredentials = await createUserWithEmailAndPassword(super.getAuth(), this.email, this.password);
        await updateProfile(userCredentials.user, {
          displayName: user.displayName,
          photoURL: user?.photoURL || ''
        });
        const { uid, emailVerified } = userCredentials.user;
        await sendEmailVerification(userCredentials.user);
        const userCollection = new DB('user');
        const userCreate: User = {
          ...user,
          id: uid,
          emailVerified: emailVerified
        }
        await userCollection.setDoc<User>(userCreate, uid);
        return resolve(await this.createUserObject(userCredentials.user, userCreate));
      } catch (error: FirebaseError | any) {
        reject(getFirebaseError(new FirebaseError(error?.code || this.CODE_FIREBASE_ERROR, this.FIREBASE_NAME)))
      }
    })
  }

  async login(): Promise<User> {
    return new Promise<User>(async (resolve, reject) => {
      try {
        const userCredentials = await signInWithEmailAndPassword(super.getAuth(), this.email, this.password);
        const { uid } = userCredentials.user;
        const userCollection = new DB('users');
        const user = await userCollection.getDoc<User>(uid);
        resolve(await this.createUserObject(userCredentials.user, user as User));
      } catch (error: FirebaseError | any) {
        reject(getFirebaseError(new FirebaseError(error?.code || this.CODE_FIREBASE_ERROR, this.FIREBASE_NAME)))
      }
    });
  };

}

