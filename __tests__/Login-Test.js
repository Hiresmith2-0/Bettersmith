// import { hasExpectedRequestMetadata } from '@reduxjs/toolkit/dist/matchers';
import React from 'react';
import { Provider } from 'react-redux';
import { screen } from '@testing-library/react'
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
import store from '../src/store';
import App from '../src/App';
import Login from '../src/pages/Login/login.jsx';

describe('Unit testing Login Page', () => {
  beforeEach(async () => {
    const app = await render(
      <Provider>
        <Login />
      </Provider>)
  })

  test('Renders the pass-in text with the label', () => {
    expect(screen.getByText('Sign in').nextSibling).toBeEmptyDOMElement()
    expect(screen.getByText('Hiresmith').nextSibling).toBeEmptyDOMElement()
  })

  test('The page loads with Sign up and Sign in buttons', () => {
    // const button = await screen.findAllByRole('button')
    expect(screen.getByRole('button', { name: 'Sign in' })).toHaveAttribute('id', 'sign-in')
    expect(screen.getByRole('button', { name: 'Sign up' })).toHaveAttribute('id', 'sign-up')
    // expect(button.length).toBe(2)
  })
})
