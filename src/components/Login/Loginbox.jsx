import React, { useState } from 'react'
import './Loginbox.css'

export default function LoginBox () {
  return (
    <div id='login-mainbox'>
      <h2>BetterSmith</h2>
      <h3>Sign In</h3>
      <h3>Hiresmith</h3>
        <div id ='signin-form'>
          <form method='POST' action='/login'>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password' />
            <input type='submit' value="login"/>
            {/* <a href='../../pages/Signup/Signup.jsx'>Sign up</a> */}
            {/* <button id='sign-in'>Sign In</button> */}
            {/* <button id='sign-up'>Sign Up</button> */}
          </form>
        </div>
    </div>

  )
}
