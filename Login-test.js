import { screen } from '@testing-library/react'

describe('Unit testing Login Page', () => {
  test('Renders the pass-in text with the label', ()=>{
    expect(screen.getByText('Sign in').nextSibling).toBeEmptyDOMElement();
  })

  test('The page loads with Sign up and Sign in buttons', async ()=>{
    const button = await screen.findAllByRole('button')
    expect(screen.getByRole('button', { name: 'Sign in' })).toHaveAttribute('id', 'sign-in')
    expect(screen.getByRole('button', { name: 'Sign up' })).toHaveAttribute('id', 'sign-up')
    expect(button.length).toBe(2)
  })
})
