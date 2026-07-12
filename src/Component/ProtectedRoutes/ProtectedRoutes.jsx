//import React from 'react';

import { use } from "react";
import Context from "../AuthContext/Context/Context";
import { Navigate, useLocation } from "react-router";
import LoadingSection from "../LoadingSection/LoadingSection";

const ProtectedRoutes = ({children}) => {
    const {CurrentUser,Loading}=use(Context);
    const location=useLocation();

    //console.log(location);
    if(Loading) return <LoadingSection></LoadingSection>
    if(CurrentUser==null){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    else{
        return children;
    }
};

export default ProtectedRoutes;