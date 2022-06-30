import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Loginbox.css'
import img from '../../img/bettersmithlogo.png'

const useInput = (initial) => {
  const [value, setValue] = useState(initial)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return [value, onChange]
}

export default function LoginBox () {
  const [username, usernameOnChange] = useInput('')
  const [inputPassword, passwordOnChange] = useInput('')

  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('/home')
  }

  const signIn = (e) => {
    e.preventDefault()
    const body = {
      username,
      inputPassword
    }
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((data) => {
        console.log('res: ', data)
        data.json()
      })
      .then((data) => {
        console.log('hereee')
        if (data === true) {
          console.log(data)
          navigateToHome()
        } else {
          window.alert('Wrong username and password combination')
        }
      }).catch((error) => console.log(error))
  }

  return (
    <div id='login-mainbox'>
        {/* <img src={img} id="bettersmith-logo"></img> */}
        <h2>BetterSmith</h2>
        <div id ='signin-form'>
          <form>
            <input type='text' placeholder='username' id='username' onChange={usernameOnChange} /><br/>
            <input type='password' placeholder='password' id='inputPassword' onChange={passwordOnChange}/><br/>
            {/* <input type='submit' value="Log In" id='loginbtn'/> */}
            <button id='sign-in' onClick={signIn}>Sign In</button>
            {/* <input id="signupinput" type='submit' value='signin' onClick={signIn} /> */}
            <a href='./signup' id='signuplink'>Sign up</a>
            {/* <button id='sign-up'>Sign Up</button> */}
          </form>
        </div>
    </div>

  )
}
