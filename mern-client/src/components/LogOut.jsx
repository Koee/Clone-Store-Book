import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const LogOut = () => {
    const location = useLocation();
    const navigate = useNavigate();
    //login success > direction page home
    const from = location.state?.pathname || "/"
    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout().then(() => {
            // Sign-out successful.
            alert(`logout successfully!`);
            navigate(from, { replace: true });
        }).catch((error) => {
            // An error happened.
            const errorMessage = error.message;
            setErr(errorMessage)
        });
    }
    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button className='bg-red-500 rounded-sm px-8 py-2 text-white' onClick={handleLogout}>Submit Logout</button>
        </div>
    )
}

export default LogOut