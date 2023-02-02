import React from 'react'
import './Login.css'
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className='login'>
       <div className='login-icon column-left'>
       <svg width="180" height="180" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 3.97363L44.7846 14.9802V36.9933L24 47.9998L3.21539 36.9933V14.9802L24 3.97363Z" fill="#009ED8"/>
            <path d="M14.3555 31.6875V12.0823C16.592 9.53186 18.6374 11.0196 19.3806 12.0823V21.2069L42.4834 0.0992135C45.6476 -0.49444 46.1391 1.72076 45.9892 2.90257L14.3555 31.6875Z" fill="#0ACF83"/>
            <path d="M14.3555 41.7611V35.5538L19.9253 30.7197L23.2193 33.6311L14.3555 41.7611Z" fill="white"/>
            <path d="M36.4584 41.4139L22.2012 28.3576L35.6765 15.888C39.5095 15.4925 39.5095 17.8472 39.0304 19.0741L28.9322 28.3576L40.7824 39.1222L36.4584 41.4139Z" fill="white"/>
        </svg>
        <br/>
        <span>KANBAN</span>
       </div>
       <div className='form column-right'>
            <div>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 3.97363L44.7846 14.9802V36.9933L24 47.9998L3.21539 36.9933V14.9802L24 3.97363Z" fill="#009ED8"/>
                    <path d="M14.3555 31.6875V12.0823C16.592 9.53186 18.6374 11.0196 19.3806 12.0823V21.2069L42.4834 0.0992135C45.6476 -0.49444 46.1391 1.72076 45.9892 2.90257L14.3555 31.6875Z" fill="#0ACF83"/>
                    <path d="M14.3555 41.7611V35.5538L19.9253 30.7197L23.2193 33.6311L14.3555 41.7611Z" fill="white"/>
                    <path d="M36.4584 41.4139L22.2012 28.3576L35.6765 15.888C39.5095 15.4925 39.5095 17.8472 39.0304 19.0741L28.9322 28.3576L40.7824 39.1222L36.4584 41.4139Z" fill="white"/>
                </svg> 
            </div>
            <span className='sp-title'>Login into your account</span>
            <span className='sp-sub-title'>welcome back please enter your details</span>
            <div className='form-inputs'>
                <label>Email</label>
                <br/>
                <input className='common-width' type={'text'} placeholder='Enter your email'/>
                <br/>
                <label>password</label>
                <br/>
                <input className='common-width' type={'password'} placeholder='Enter your password'/>
                <div className='block'>
                    <div className='check-remember'>
                        <input type={"checkbox"}/>
                        <label>Remember for 30 days</label>
                    </div>
                    <div>
                        <label>Forgot password</label>
                    </div>
                </div>
                <button className='common-width btn'>Sign in</button><br/>
                <button className='common-width btn btn-google' ><FcGoogle  />Sign in with google</button>
                <p>Don't have an account? <a href='/'> Sign up</a></p>
            </div>
       </div>
    </div>
  )
}
