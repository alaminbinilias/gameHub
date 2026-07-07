//import React from 'react';

import { createUserWithEmailAndPassword } from "firebase/auth";
import Context from "../Context/Context";
import auth from "../../FireBase/Firebase.init";

const Provider = ({children}) => {




    const CreateUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }



    const value={
        CreateUser,
    }






    return (
        <Context value={value}>
            {children}
        </Context>
    );
};

export default Provider;