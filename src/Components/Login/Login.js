import React from 'react';
import { RxCross2 } from "react-icons/rx";
import './login.css'
const Login = () => {
    return (
        <>
            <div className="login">
                <form >
                    <div className="content1">
                        <div className="sub-content1">
                            <span>sign-in</span>
                        </div>
                        <div className="sub-content2">
                            <RxCross2 />
                        </div>
                    </div>
                    <div className="form-container">
                        <div className='line'></div>
                        <input type="text"
                            placeholder='Username'
                            required
                            autoComplete />
                        <input type="password"
                            placeholder='Password'
                            required
                            autoComplete />
                        <div className="content">
                            <span1>Forgot your password?</span1>
                        </div>
                        <button type='submit'>Login</button>
                        <div className='line'></div>
                    </div>
                    <div className="content2">
                        <span2>Already have an account? <b> Sign up</b></span2>
                    </div>

                </form>
            </div>
        </>
    );
}

export default Login;
