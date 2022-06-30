import React, { useState } from 'react'
import './Loginbox.css'

export default function LoginBox () {
  return (
    <div id='login-mainbox'>
      <h2>BetterSmith</h2>
        <div id ='signin-form'>
          <form method='POST' action='/login'>
            <input type='text' placeholder='username' id='username' /><br/>
            <input type='password' placeholder='password' id='password'/><br/>
            <input type='submit' value="Log In" id='loginbtn'/>
            <a href='../../pages/Signup/Signup.jsx' id='signuplink'>Sign up</a>
            {/* <button id='sign-in'>Sign In</button> */}
            {/* <button id='sign-up'>Sign Up</button> */}
          </form>
        </div>
    </div>

  )
}
