import React from 'react';
import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthKeyPad } from '@components/AuthKeyPad';
import { AuthKeyPadProps } from '@types-app/components/AuthKeyPad.type';

describe('Testing <AuthKeyPad /> ', () => {

  const renderAuthKeyPad = (props?: AuthKeyPadProps) => render(<AuthKeyPad {...props} />);

  test('should render in dom', () => {
    const component = renderAuthKeyPad();
    expect(component.getByRole('button'))
      .toHaveTextContent('Iniciar Session con Google');
    expect(component.container).toBeInTheDocument();
  });

  test('should render divider component with contol prop', () => {
    const { queryByTestId } = renderAuthKeyPad({ divider: true });
    expect( queryByTestId('divider') ).toBeInTheDocument();
  });

  test('should not render divider component with control prop', () => {
    const { queryByTestId } = renderAuthKeyPad();
    expect( queryByTestId('divider') ).not.toBeInTheDocument();
    expect( queryByTestId('divider') ).toHaveStyle
  });

  test('should execute function onClick', async () => {
    const handleOnClic = jest.fn();
    const { getByRole } = renderAuthKeyPad({ onClick: handleOnClic });
    const btn = getByRole('button');
    fireEvent.click(btn);
    await userEvent.click(btn);

    expect(handleOnClic).toBeCalledTimes(2);
    expect(handleOnClic.mock.calls.length).toEqual(2);

  })

});


