import React, { useState } from 'react'
import './Signup.css'

const useInput = (initial) => {
  const [value, setValue] = useState(initial)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return [value, onChange]
}

export default function SignupBox (props) {
  const [username, usernameOnChange] = useInput('')
  const [password, passwordOnChange] = useInput('')
  const [firstName, firstNameOnChange] = useInput('')
  const [lastName, lastNameOnChange] = useInput('')

  const saveUser = () => {
    const body = {
      username,
      password,
      firstName,
      lastName
    }
    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div id='login-mainbox'>
      <h2>BetterSmith</h2>
      <h3>Sign Up</h3>
      <div id='signup-form'>
        <form method='POST' action='/signup' id="signupboxform">
          <input
            type='text'
            placeholder='First Name'
            onChange={firstNameOnChange}
            id="signupinput"
          />
          <input
            type='text'
            placeholder='Last Name'
            onChange={lastNameOnChange}
            id="signupinput"
          />
          <input
            type='text'
            placeholder='Username'
            onChange={usernameOnChange}
            id="signupinput"
          />
          <input
            type='password'
            placeholder='Password'
            onChange={passwordOnChange}
            id="signupinput"
          />
          <input id="signupinput" type='submit' value='signup' onClick={saveUser} />
          {/* <a href='../../pages/Login/Login.jsx'>Log in</a> */}
        </form>
      </div>
    </div>
  )
}
