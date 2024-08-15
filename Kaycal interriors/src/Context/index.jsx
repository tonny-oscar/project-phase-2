import React, { useContext, useState, useEffect} from "react";
import {auth} from "../Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function AuthProvider ({ children }){
    const [curentUser, setUser]= useState(null);
    const [userLoggedIn, setUserLogedIn] =useState(false);
    const [loading, setLoading] =useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, [])

    async function initializeUser(user){
        if ( user) {
            setCurrentUser({ ...user });
            setUserLogedIn(true);
        }else {
            setCurrentUser (null);
            setUserLogedIn (false);
        }
        setLoading (false);
    }
    
    const value = {
        setCurrentUser,
        userLoggedIn,
        loading
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}