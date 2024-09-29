import React from 'react'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1 className='text-2xl font-semibold'>Signup</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account</p>
        <div className='loginsignup-agree'>
            <input type="checkbox" name='' id='' />
            <p>by continuing,i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
