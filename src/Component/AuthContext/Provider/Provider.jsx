//import React from 'react';

import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Context from "../Context/Context";
import auth from "../../FireBase/Firebase.init";
import { useEffect, useState } from "react";

const Provider = ({children}) => {

    const [CurrentUser,setCurrentUser]=useState(null);
    const [DATA,SetDATA]=useState([]);
    const [Loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch('/GamesData/Data.json').then(res=>res.json()).then(data=>SetDATA(data));
    },[])

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


    ///SignOut
    const SignOutUser=()=>{
        return signOut(auth);
    }


    ///Update name,photo

    const Update_Name_Photo=(nme,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:nme,
            photoURL:photo
        });
    }


    ///observer add;

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(crntUsr)=>{
            if(crntUsr){
                setCurrentUser(crntUsr);
            }
            else{
                setCurrentUser(null);
            }
            setLoading(false);
        });
        return ()=>unsubscribe();
    },[])



    const value={
        CreateUser,
        userSignIn,
        resetPassword,
        googleSignin,
        GitHubSignIn,
        CurrentUser,
        setCurrentUser,
        SignOutUser,
        Update_Name_Photo,
        DATA,
        SetDATA,
        Loading,
        setLoading
    }






    return (
        <Context value={value}>
            {children}
        </Context>
    );
};

export default Provider;