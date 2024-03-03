import { GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";

export const authContext = createContext(null);
const auth = getAuth(app)
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)
    // github sign in 
    const gitLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    // google sign in method
    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // email and password log in
     const passwordLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
       }
    const userlogOut = () =>{
        setLoading(true)
        signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            // An error happened.
          });
    }

    useEffect(() =>{
     const unSubscribe =   onAuthStateChanged(auth, currentUser=>{
            // console.log('current user',currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return () => {unSubscribe()}
        
    },[])

    const authInfo = {
        user,
        loading,    
        gitLogIn,
        googleLogIn,
        passwordLogin,
        userlogOut
           
        }
   

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;