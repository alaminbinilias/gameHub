//import React from 'react';

import { Circles } from "react-loader-spinner";

const LoadingSection = () => {
    return (
        <div className="w-full flex justify-center h-140 items-center">
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />)
        </div>
    );
};

export default LoadingSection;