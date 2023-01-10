import { FirebaseError } from 'firebase/app';
import { collection, doc, Firestore, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { firestore } from "../config";
import { getFirebaseError } from '../utils';

class DB {

  private db:Firestore = firestore;
  private collection;
  private CODE_FIREBASE_ERROR = 'F_FIRESTORE_0000';
  private FIREBASE_NAME = 'auth-firestore';
  private NOT_FOUND_QUERY = 'firebase/not-found';

  constructor(collection: string) {
    this.collection = collection;
  };

  async setDoc<U extends {}>( dataDoc:U, path: string, ...pathSegments: string[] ) {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const reference = doc(this.db, this.collection, path, ...pathSegments);
        await setDoc(reference, dataDoc);
        return resolve(true);
      } catch (error:FirebaseError | any) {
        return reject(
          getFirebaseError(
            new FirebaseError(error?.code || this.CODE_FIREBASE_ERROR, this.FIREBASE_NAME)
          )
        );
      }
    })
  };

  async getDoc<U>( idDoc:string ) {
    return new Promise<U>(async (resolve, reject) => {
      try {
        const reference = doc(this.db, this.collection, idDoc);
        const response = await getDoc(reference);
        if ( response.exists() ) {
          return resolve(response.data() as U);
        }
        return reject(getFirebaseError(new FirebaseError(this.NOT_FOUND_QUERY, this.FIREBASE_NAME)));
      } catch (error: FirebaseError | any) {
        return reject(
          getFirebaseError(
            new FirebaseError(error?.code || this.CODE_FIREBASE_ERROR, this.FIREBASE_NAME)
          )
        );
      }
    });
  };

  updateDoc() {};

  deleteDoc() {};

  getDocs<U>() {
    return new Promise<Array<U>>(async (resolve, reject) => {
      try {
        const reference = collection(this.db, this.collection);
        const response = await getDocs(reference);
        if ( !response.empty ) {
          const docs:Array<U> = [];
          response.forEach(docInstence => {
            docs.push(docInstence.data() as U);
          });
          return resolve(docs);
        }
        return reject(getFirebaseError(new FirebaseError(this.NOT_FOUND_QUERY, this.FIREBASE_NAME)));
      } catch (error: FirebaseError | any) {
        return reject(
          getFirebaseError(
            new FirebaseError(error?.code || this.CODE_FIREBASE_ERROR, this.FIREBASE_NAME)
          )
        );
      }
    });
  };

}

export default DB

