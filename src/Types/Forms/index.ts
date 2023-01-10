interface FormElementsLogin extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  remember: HTMLInputElement;
};

export interface FormLogin extends HTMLFormElement {
  readonly elements: FormElementsLogin;
}

interface FormElementsRegister extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  surname: HTMLInputElement;
  email: HTMLInputElement;
  phoneNumber: HTMLInputElement;
  password: HTMLInputElement;
  passwordConfirm: HTMLInputElement;
}

export interface FormRegister extends HTMLFormElement {
  readonly elements: FormElementsRegister;
}