import { GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const authContext = createContext(null);
const auth = getAuth(app)
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // github sign in 
    const gitLogIn = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    // google sign in method
    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    // email and password log in
     const passwordLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
       }

    useEffect(() =>{
     const unSubscribe =   onAuthStateChanged(auth, currentUser=>{
            console.log('current user',currentUser)
            setUser(currentUser);
        })
        return () => {unSubscribe()}
    },[])

    const authInfo = {
        user,    
        gitLogIn,
        googleLogIn,
        passwordLogin 
           
        }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;