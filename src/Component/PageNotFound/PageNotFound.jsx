//import React from 'react';

import { Link } from "react-router";

const PageNotFound = () => {
    return (
        <div className="">
            <div className=''>
                <div className="flex justify-center items-center pt-30">
                    <img className="" src='https://cdni.iconscout.com/illustration/premium/thumb/not-found-illustration-svg-download-png-6167023.png' alt="" />
                </div>
                <div className="w-full mx-auto">
                    <p className="text-center text-3xl font-bold text-[#ff6b6b] -mt-8">Page Not Found</p>
                    <Link to='/' className='btn font-medium w-fit mx-auto flex justify-center mt-3 btn-primary text-white'>Go Back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;