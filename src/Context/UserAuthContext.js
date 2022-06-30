import React, {useState, useEffect, useContext } from 'react'
import { createContext } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"
import { auth } from '../firebase';

const userAuthContext=createContext()

export function UserAuthContextProvider({children}){
    const [User, setUser] = useState("")
    const signUp=(email,password)=>{

        return createUserWithEmailAndPassword(auth, email,password)
    }
    const logIn=(email,password)=>{

        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const googleSignIn=()=>{
        const googleAuthProvider= new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(() => {
      
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
    
      return () => {
        unsubscribe();
      }
    }, [])
    

    return <userAuthContext.Provider value={{User, signUp, logIn, logOut, googleSignIn}}>
        {children}
    </userAuthContext.Provider> 

}

export function useUserAuth(){
    return useContext(userAuthContext)
}