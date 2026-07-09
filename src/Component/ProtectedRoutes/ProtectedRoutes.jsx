//import React from 'react';

import { use } from "react";
import Context from "../AuthContext/Context/Context";
import { Navigate, useLocation } from "react-router";

const ProtectedRoutes = ({children}) => {
    const {CurrentUser}=use(Context);
    const location=useLocation();

    console.log(location);

    if(CurrentUser==null){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    else{
        return children;
    }
};

export default ProtectedRoutes;