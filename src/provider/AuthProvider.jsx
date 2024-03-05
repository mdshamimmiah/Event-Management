import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/Firebase.Config";

export const AuthContex = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


const [loading, setLoading] = useState(true);



const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword (auth, email, password)
}


const signInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}


const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}



const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}


useEffect(() =>{
const unSubscribe = onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser);
    console.log('observing current user', currentUser)
    setLoading(false);
})

return () =>{
    unSubscribe();
}

}, [])

    const authInfo = { user, loading, createUser, signInUser, logOut, signInWithGoogle }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;

AuthProvider.PropTypes = {
    children: PropTypes.node
}