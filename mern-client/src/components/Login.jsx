import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider'

import googleLogo from "../assets/google-logo.svg";

const Login = () => {
    const { login, loginWithGG } = useContext(AuthContext)
    const [error, setErr] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    //login success > direction page home
    const from = location.state?.pathname || "/"

    //register with Gmail
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        login(email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert(`Login successfully !`)
            navigate(from, { replace: true })
            // ...
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErr(errorMessage)
            });
    };

    //signin GG
    const handleRegisterGG = () => {
        loginWithGG().then((result) => {
            const user = result.user
            navigate(from, { replace: true })
            alert("Sign up succesfully!")
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setErr(errorMessage)
            });;
    }
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">LOGIN Form</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                </div>

                                <div className="relative">
                                    <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                </div>
                                {error ? <p className='text-red-700 text-base'>
                                    Email or  Password is not correct
                                </p> : ``}

                                <p>If your haven't an account. Please <Link to="/sign-up" className='text-base text-blue-500 underline'>Sign up</Link > Here</p>
                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-4 py-2">Submit Login</button>
                                </div>
                            </form>
                        </div>
                        <hr />
                        <div className='flex w-full items-center flex-col mt-5 gap-3'>
                            <button onClick={handleRegisterGG} className='block '><img src={googleLogo} alt="" className='w-12 h-12 inline-block' />Login with  Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login