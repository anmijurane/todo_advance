export interface User {
  id: string;
  displayName: string;
  name: string;
  surname: string;
  email: string | null;
  emailVerified: boolean;
  photoURL?: string;
  phoneNumber: string | null;
};

export interface UserCredentials {
  email: string;
  password: string;
}
