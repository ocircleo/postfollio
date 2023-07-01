import { createContext, useEffect, useState } from "react";
import app from '../assets/Firebase_sdk'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
export const userContext = createContext(null)
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [refetch, setRefetch] = useState(true);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    // ====== Sign in Methods =====
    //create email users
    const createEmailUsers = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Sign in with Email password
    const emailSingIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //sing in with google
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
    }
    //Update users 
    const updateUser = (name, img) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
        })
    }
    //sign out 
    const sigout = () => {
        return signOut(auth);
    }
    //Look for already signed in users
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, newuser => {
            setUser(newuser)
            if (!newuser) {
                setLoading(false)
            }
        });

        return () => unSubscribe()
    })
    const providerData = {
        user, setUser, refetch, setRefetch, loading, setLoading, createEmailUsers, emailSingIn, googleSignIn, updateUser, sigout
    }
    return (
        <userContext.Provider value={providerData}>
            {children}
        </userContext.Provider>
    );
};

export default Provider;