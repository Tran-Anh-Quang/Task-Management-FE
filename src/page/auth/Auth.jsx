import React from 'react'
import { useState } from 'react';
import "./Auth.css"
import Login from './Login';
import Register from './Register';
const Auth = () => {
    const [isRegister, setIsRegister] = useState(false);
    const togglePanel = () => {
        setIsRegister(!isRegister)
    }
    return (
        <div className='flex justify-center h-screen items-center overflow-hidden'>
            <div className='box lg:max-w-4xl'>
                <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
                    <div className='front'>
                        <img src='' alt='' />
                        <div className='text'>
                            <span className='text-1'>
                                Success is built upon well-organized tasks
                            </span>
                            <span className='text-2 text-xs'>
                                Let's get connected
                            </span>
                        </div>
                    </div>
                    <div className='back'>
                        <img src='' alt='' />
                    </div>
                </div>
                <div className='form h-full'>
                    <div className='form-content h-full'>
                        <div className='login-form'>
                            <Login togglePanel={togglePanel}/>
                        </div>
                        <div className='register-form'>
                            <Register />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
