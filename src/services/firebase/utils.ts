import { FirebaseError } from 'firebase/app';
import type { ErrorBundary } from '../../Types/Properties';
import { getTranscriptionFirebaseCode } from './codes-transcription';

export const getFirebaseError = (error: FirebaseError): ErrorBundary => {
  if ( error instanceof FirebaseError ) {
    return {
      message: getTranscriptionFirebaseCode(error),
      name: error?.name || 'FirebaseError',
      stack: error.stack,
      code: error.code,
      extraData: error.customData,
    }
  }
  return {
    message: 'ErrorFirebase',
    name: 'Error - getFirebaseError',
    stack: '',
    code: 'F-INTERNAL-00000', //POR DEFINIR!
  }
};

