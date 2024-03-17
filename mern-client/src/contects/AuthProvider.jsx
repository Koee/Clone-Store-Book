import React, { createContext, useEffect, useState } from 'react'

import app from "../firebase/firebase.config"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const ggProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create register with email 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    //create register with GG
    const loginWithGG = () => {
        setLoading(true);
        return signInWithPopup(auth, ggProvider)
    }

    // reload account login seccessly 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currUser => {
            // console.log(currUser)
            setUser(currUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    //info account login
    const authInfo = {
        user,
        createUser, // crete account Gmail 
        loginWithGG, //login with GG
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider