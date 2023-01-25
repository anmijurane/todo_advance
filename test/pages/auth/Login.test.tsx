import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Login } from "../../../src/pages/auth/Login";
import { renderWithProviders } from "../../test-utils/renderWithProvider";

describe('Testing <Login />', () => {

  //Skip because, TODO: firestore implementation for testing
  test.skip('should make dispatch', () => {

    const { getAllByRole, store } = renderWithProviders(<Login />);
    const emailText = 'anmijurane@gmail.com';
    const passwordText = 'password123';
    const form = getAllByRole('button')[0];
    console.log(store.getState().auth)
    fireEvent.submit(form, {
      event: {
        preventDefault: jest.fn(),
        currentTarget: {
          elements: {
            email: emailText,
            password: passwordText
          }
        }
      }
    })
    console.log(store.getState().auth)

  });

});
