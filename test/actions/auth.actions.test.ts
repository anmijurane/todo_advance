import { User } from "@types-app/Properties";
// import { AuthEmail } from "../../src/services/firebase/auth/email-auth.class";
import { Login } from "../../src/actions/auth.actions";
import store from "../../src/store";


describe('Testing Actions for Auth', () => {

  //Skip because, TODO: firestore implementation for testing
  test.skip('should call funcion', async () => {

    const user:User = {
      id: '',
      email: '',
      displayName: '',
      emailVerified: false,
      name: '',
      phoneNumber: '',
      surname: '',
      photoURL: '',
    };

    const result = await store.dispatch(
      Login({
        email: 'anmijurane@gmail.com',
        password: 'password123',
      })
    );

    console.log(store.getState());



  });

});
