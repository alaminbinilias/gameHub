//import React from 'react';

import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Context from "../Context/Context";
import auth from "../../FireBase/Firebase.init";

const Provider = ({children}) => {




    const CreateUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }


    const userSignIn=(email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email);
    }


    const GoogleProvider=new GoogleAuthProvider();

    const googleSignin=()=>{
        return signInWithPopup(auth,GoogleProvider);
    }

    const GitProvider=new GithubAuthProvider();

    const GitHubSignIn=()=>{
        return signInWithPopup(auth,GitProvider);
    }



    const value={
        CreateUser,
        userSignIn,
        resetPassword,
        googleSignin,
        GitHubSignIn
    }






    return (
        <Context value={value}>
            {children}
        </Context>
    );
};

export default Provider;