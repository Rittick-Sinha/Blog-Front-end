import React from 'react';
import './register.css';
import { RxCross2 } from "react-icons/rx";
const Register = () => {
    return (
        <>
            <div className="register">
                <form >
                    <div className="content1">
                        <div className="sub-content1">
                            <span>Register</span>
                        </div>
                        <div className="sub-content2">
                            {/* <RxCross2 /> */}
                        </div>
                    </div>
                    <div className="form-container">
                        <div className='line'></div>
                        <input type="text"
                            placeholder='Full name'
                            required
                            autoComplete />
                        <input type="text"
                            placeholder='Username'
                            required
                            autoComplete />
                        <input type="password"
                            placeholder='New password'
                            required
                            autoComplete />
                        <input type="password"
                            placeholder='Re-enter password'
                            required
                            autoComplete />
                        <div className="content">
                            <input type="checkbox"
                                className='checkbox'
                                name="policy"
                                required
                                autoComplete />
                            <label for="policy">I’ve read and agree with Terms of Services and Privacy Policy</label>
                        </div>
                        <button type='submit'>Register</button>
                        <div className='line'></div>
                    </div>
                    <div className="content2">
                        <span2>Already have an account? <b> Sign In</b></span2>
                    </div>

                </form>
            </div>
        </>
    );
}

export default Register;
