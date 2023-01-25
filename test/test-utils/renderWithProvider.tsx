import React, { FC, PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'

import { stateMock } from './preloadedState'
import { setupStore } from '../../src/store';
import { RootState } from '../../src/store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: ReturnType<typeof setupStore>
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = stateMock,
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {} ) => {

    const Wrapper:FC<PropsWithChildren> = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    return {
      store,
      ...render(
        ui,
        {
          wrapper: Wrapper,
          ...renderOptions
        }
      ),
    };
}
